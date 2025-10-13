export default eventHandler(async (event) => {
  const body = await readBody(event);

  const name = body.name;
  if (!name || name.length === 0 || typeof name !== 'string') {
    throw createError({
      statusCode: 400,
      message: 'Name is required',
    });
  }

  const description = body.description;
  if (
    !description ||
    description.length === 0 ||
    typeof description !== 'string'
  ) {
    throw createError({
      statusCode: 400,
      message: 'Description is required',
    });
  }

  const email = body.email;
  if (!email || email.length === 0 || typeof email !== 'string') {
    throw createError({
      statusCode: 400,
      message: 'Email is required',
    });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    throw createError({
      statusCode: 400,
      message: 'Email is invalid',
    });
  }

  try {
    await sendContactEmail(email, name, description);
    return 'Email sent';
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 500,
      message: 'Failed to send email',
    });
  }
});

export async function sendContactEmail(
  email: string,
  name: string,
  description: string,
) {
  await sendEmail(
    'info@chrispaganon.com',
    'Nouveau message de contact',
    `
    <h1>Un nouveau message a été reçus</h1>
    <p>De: ${name}</p>
    <p>Email: ${email}</p>
    <p>${description}</p>
  `,
  );
}
