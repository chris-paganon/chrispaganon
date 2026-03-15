import {
  PDFDocument,
  StandardFonts,
  rgb,
  type PDFFont,
  type PDFPage,
} from 'pdf-lib';
import { cvByLocale } from '../data/cv/index';
import type {
  CvDocument,
  CvEducationEntry,
  CvExperienceEntry,
  CvProjectEntry,
  CvRatedItem,
} from '../types/cv';

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_X = 22;
const HEADER_TOP = PAGE_HEIGHT - 50;
const HEADER_BOTTOM = PAGE_HEIGHT - 130;
const BODY_TOP = HEADER_BOTTOM - 18;
const BODY_BOTTOM = 10;
const LEFT_COLUMN_WIDTH = 350;
const COLUMN_GAP = 18;
const RIGHT_COLUMN_X = MARGIN_X + LEFT_COLUMN_WIDTH + COLUMN_GAP;
const RIGHT_COLUMN_WIDTH = PAGE_WIDTH - RIGHT_COLUMN_X - MARGIN_X;

const BLUE = rgb(0.11, 0.29, 0.62);
const TEXT = rgb(0.2, 0.2, 0.2);
const MUTED = rgb(0.45, 0.45, 0.45);
const LIGHT = rgb(0.84, 0.85, 0.87);

interface PdfContext {
  page: PDFPage;
  regular: PDFFont;
  bold: PDFFont;
}

interface HeaderSegment {
  text: string;
  color: ReturnType<typeof rgb>;
  url?: string;
}

export async function generateCvPdf(locale: 'en' | 'fr') {
  const cv = cvByLocale[locale] ?? cvByLocale.en;
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const ctx = { page, regular, bold };

  drawHeader(ctx, cv);
  drawLeftColumn(ctx, cv);
  drawRightColumn(ctx, cv);

  return pdf.save();
}

export async function downloadCv(locale: 'en' | 'fr') {
  const bytes = await generateCvPdf(locale);
  const cv = cvByLocale[locale] ?? cvByLocale.en;
  const blob = new Blob([new Uint8Array(bytes)], {
    type: 'application/pdf',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = cv.fileName;
  link.click();
  URL.revokeObjectURL(url);
}

function drawHeader(ctx: PdfContext, cv: CvDocument) {
  const { page, regular, bold } = ctx;

  page.drawText(cv.header.name, {
    x: MARGIN_X,
    y: HEADER_TOP,
    font: bold,
    size: 24.2,
    color: TEXT,
  });

  page.drawText(cv.header.title, {
    x: MARGIN_X,
    y: HEADER_TOP - 22,
    font: bold,
    size: 12.2,
    color: BLUE,
  });

  const summaryLines = wrapText(regular, cv.header.summary, 9.7, 540);
  let summaryY = HEADER_TOP - 36;

  for (const line of summaryLines) {
    page.drawText(line, {
      x: MARGIN_X,
      y: summaryY,
      font: regular,
      size: 9.7,
      color: TEXT,
    });
    summaryY -= 10.8;
  }

  drawHeaderContactLine(
    ctx,
    [
      {
        text: cv.header.website,
        color: BLUE,
        url: cv.header.website,
      },
      {
        text: cv.header.email,
        color: BLUE,
        url: `mailto:${cv.header.email}`,
      },
      {
        text: cv.header.linkedin,
        color: BLUE,
        url: cv.header.linkedin,
      },
      {
        text: cv.header.github,
        color: BLUE,
        url: cv.header.github,
      },
      {
        text: cv.header.location,
        color: MUTED,
      },
    ],
    MARGIN_X,
    summaryY - 4,
    8.05,
  );
}

function drawLeftColumn(ctx: PdfContext, cv: CvDocument) {
  let y = drawSectionHeading(ctx, cv.labels.experiences, MARGIN_X, BODY_TOP, {
    width: LEFT_COLUMN_WIDTH,
  });

  for (const experience of cv.experiences) {
    y = drawExperienceEntry(ctx, experience, MARGIN_X, y, LEFT_COLUMN_WIDTH);
  }

  y -= 16;
  y = drawSectionHeading(ctx, cv.labels.education, MARGIN_X, y, {
    width: LEFT_COLUMN_WIDTH,
  });
  drawEducation(ctx, cv.education, MARGIN_X, y, LEFT_COLUMN_WIDTH);
}

function drawRightColumn(ctx: PdfContext, cv: CvDocument) {
  let y = drawSectionHeading(
    ctx,
    cv.labels.projects,
    RIGHT_COLUMN_X,
    BODY_TOP,
    {
      width: RIGHT_COLUMN_WIDTH,
    },
  );

  for (const project of cv.projects) {
    y = drawProjectEntry(ctx, project, RIGHT_COLUMN_X, y, RIGHT_COLUMN_WIDTH);
  }

  y -= 10;
  y = drawSectionHeading(ctx, cv.labels.skills, RIGHT_COLUMN_X, y, {
    width: RIGHT_COLUMN_WIDTH,
  });
  y = drawRatedItems(ctx, cv.skills, RIGHT_COLUMN_X, y, RIGHT_COLUMN_WIDTH);

  y -= 16;
  y = drawSectionHeading(ctx, cv.labels.languages, RIGHT_COLUMN_X, y, {
    width: RIGHT_COLUMN_WIDTH,
  });
  drawRatedItems(ctx, cv.languages, RIGHT_COLUMN_X, y, RIGHT_COLUMN_WIDTH);
}

function drawSectionHeading(
  ctx: PdfContext,
  label: string,
  x: number,
  y: number,
  options: { width: number },
) {
  const { page, bold } = ctx;

  page.drawText(label, {
    x,
    y,
    font: bold,
    size: 16,
    color: BLUE,
  });

  page.drawLine({
    start: { x, y: y - 5 },
    end: { x: x + options.width, y: y - 5 },
    thickness: 1.3,
    color: BLUE,
  });

  return y - 25;
}

function drawExperienceEntry(
  ctx: PdfContext,
  experience: CvExperienceEntry,
  x: number,
  y: number,
  width: number,
) {
  const { page, regular, bold } = ctx;

  page.drawText(`${experience.role} - ${experience.company}`, {
    x,
    y,
    font: bold,
    size: 9.9,
    color: TEXT,
  });

  page.drawText(`${experience.dateRange}   •   ${experience.location}`, {
    x,
    y: y - 11,
    font: regular,
    size: 7.95,
    color: MUTED,
  });

  let nextY = y - 22;

  for (const bullet of experience.bullets) {
    nextY = drawBulletText(ctx, bullet, x + 2, nextY, width - 4, 8, 9.55);
  }

  return nextY - 8;
}

function drawProjectEntry(
  ctx: PdfContext,
  project: CvProjectEntry,
  x: number,
  y: number,
  width: number,
) {
  const { page, regular, bold } = ctx;

  page.drawText(project.name, {
    x,
    y,
    font: bold,
    size: 9.2,
    color: TEXT,
  });

  page.drawText(`${project.dateRange}   •   ${project.location}`, {
    x,
    y: y - 10,
    font: regular,
    size: 7.45,
    color: MUTED,
  });

  let nextY = y - 19;

  for (const bullet of project.bullets) {
    nextY = drawBulletText(ctx, bullet, x + 1, nextY, width - 2, 7.45, 8.85);
  }

  return nextY - 3;
}

function drawEducation(
  ctx: PdfContext,
  education: CvEducationEntry,
  x: number,
  y: number,
  width: number,
) {
  const { page, regular, bold } = ctx;
  const schoolWidth = bold.widthOfTextAtSize(education.school, 8.5);

  page.drawText(education.school, {
    x,
    y,
    font: bold,
    size: 9.5,
    color: TEXT,
  });

  page.drawText(education.degree, {
    x,
    y: y - 11,
    font: regular,
    size: 8,
    color: TEXT,
  });

  page.drawText(education.date, {
    x: Math.min(x + width - 70, x + schoolWidth + 10),
    y,
    font: regular,
    size: 8,
    color: MUTED,
  });
}

function drawHeaderContactLine(
  ctx: PdfContext,
  segments: HeaderSegment[],
  x: number,
  y: number,
  size: number,
) {
  const { page, regular } = ctx;
  let cursorX = x;

  segments.forEach((segment, index) => {
    page.drawText(segment.text, {
      x: cursorX,
      y,
      font: regular,
      size,
      color: segment.color,
    });

    const textWidth = regular.widthOfTextAtSize(segment.text, size);

    if (segment.url) {
      page.drawLine({
        start: { x: cursorX, y: y - 1.6 },
        end: { x: cursorX + textWidth, y: y - 1.6 },
        thickness: 0.6,
        color: segment.color,
      });
    }

    cursorX += textWidth;

    if (index < segments.length - 1) {
      const separator = '   •   ';
      page.drawText(separator, {
        x: cursorX,
        y,
        font: regular,
        size,
        color: MUTED,
      });
      cursorX += regular.widthOfTextAtSize(separator, size);
    }
  });
}

function drawRatedItems(
  ctx: PdfContext,
  items: CvRatedItem[],
  x: number,
  y: number,
  width: number,
) {
  const { page, regular, bold } = ctx;
  let nextY = y;
  const dotsX = x + width - 48;

  for (const item of items) {
    const label = item.detail ? `${item.label} - ${item.detail}` : item.label;
    const font = item.detail ? regular : bold;
    const fontSize = item.detail ? 7.95 : 8.05;

    page.drawText(label, {
      x,
      y: nextY,
      font,
      size: fontSize,
      color: TEXT,
    });

    drawRatingDots(ctx, item.rating, dotsX, nextY + 1.2);
    nextY -= 14.2;
  }

  return nextY - 2;
}

function drawRatingDots(
  ctx: PdfContext,
  rating: number,
  x: number,
  y: number,
  total = 5,
) {
  const { page } = ctx;

  for (let index = 0; index < total; index += 1) {
    page.drawCircle({
      x: x + index * 10,
      y,
      size: 3.4,
      color: index < rating ? BLUE : LIGHT,
      borderColor: index < rating ? BLUE : LIGHT,
      borderWidth: 0.6,
    });
  }
}

function drawBulletText(
  ctx: PdfContext,
  text: string,
  x: number,
  y: number,
  width: number,
  size: number,
  lineHeight: number,
) {
  const { page, regular } = ctx;
  const bulletX = x;
  const textX = x + 9;
  const lines = wrapText(regular, text, size, width - 9);

  page.drawText('•', {
    x: bulletX,
    y,
    font: regular,
    size,
    color: TEXT,
  });

  let nextY = y;

  for (const line of lines) {
    page.drawText(line, {
      x: textX,
      y: nextY,
      font: regular,
      size,
      color: TEXT,
    });
    nextY -= lineHeight;
  }

  return nextY - 1;
}

function wrapText(font: PDFFont, text: string, size: number, width: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current.length > 0 ? `${current} ${word}` : word;

    if (font.widthOfTextAtSize(candidate, size) <= width) {
      current = candidate;
      continue;
    }

    if (current.length > 0) {
      lines.push(current);
      current = word;
      continue;
    }

    lines.push(word);
    current = '';
  }

  if (current.length > 0) {
    lines.push(current);
  }

  return lines;
}

export function getCvPreviewForLocale(locale: string) {
  return cvByLocale[locale === 'fr' ? 'fr' : 'en'];
}

export function isCvLayoutWithinPage(locale: 'en' | 'fr') {
  const cv = cvByLocale[locale];
  const estimatedHeight = estimateContentHeight(cv);
  return estimatedHeight <= BODY_TOP - BODY_BOTTOM;
}

function estimateContentHeight(cv: CvDocument) {
  const leftHeight =
    18 +
    cv.experiences.reduce((total, experience) => {
      return total + 26 + experience.bullets.length * 19;
    }, 0) +
    38;

  const rightHeight =
    18 +
    cv.projects.reduce((total, project) => {
      return total + 22 + project.bullets.length * 17;
    }, 0) +
    18 +
    cv.skills.length * 15 +
    18 +
    cv.languages.length * 15;

  return Math.max(leftHeight, rightHeight);
}
