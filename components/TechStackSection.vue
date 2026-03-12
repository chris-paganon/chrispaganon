<template>
  <div class="tech-stack-wrapper" :class="`tech-stack-wrapper-${title}`">
    <h3>{{ $t(`TechStack.${title}`) }}</h3>

    <motion.div
      layout
      class="tech-stage"
      :class="[ `tech-stage-${title}`, { expanded: isExpanded } ]"
      role="button"
      tabindex="0"
      :aria-expanded="isExpanded"
      :aria-label="$t(isExpanded ? 'TechStack.collapse' : 'TechStack.expand')"
      :while-hover="
        prefersReducedMotion || isExpanded
          ? undefined
          : { scale: 1.01, y: -4, transition: hoverTransition }
      "
      :while-focus="
        prefersReducedMotion || isExpanded
          ? undefined
          : { scale: 1.01, y: -4, transition: hoverTransition }
      "
      :transition="layoutTransition"
      @click="toggleInteractiveStack"
      @keyup.enter.prevent="toggleInteractiveStack"
      @keyup.space.prevent="toggleInteractiveStack"
    >
      <div class="tech-stage-toolbar">
        <motion.p layout class="tech-stage-hint">
          {{ $t(isExpanded ? 'TechStack.collapse' : 'TechStack.expand') }}
        </motion.p>
        <motion.span
          class="tech-stage-badge"
          :animate="
            prefersReducedMotion
              ? undefined
              : isExpanded
                ? { rotate: 45, scale: 1.02 }
                : { rotate: 0, scale: 1 }
          "
          :transition="badgeTransition"
        >
          +
        </motion.span>
      </div>

      <motion.ul
        layout
        class="tech-constellation"
        :class="{ expanded: isExpanded }"
        :transition="layoutTransition"
      >
        <motion.li
          v-for="(tech, index) in techlist"
          :key="tech"
          layout
          class="tech-entry"
          :class="{ expanded: isExpanded }"
          :animate="prefersReducedMotion ? undefined : getEntryAnimation(index)"
          :transition="getEntryTransition(index)"
        >
          <motion.div layout class="tech-card">
            <motion.div layout class="tech-icon-shell">
              <img :src="getTechLogo(tech)" :alt="tech" class="icon" />
            </motion.div>

            <AnimatePresence :initial="false" mode="popLayout">
              <motion.div
                v-if="isExpanded"
                :key="`${tech}-details`"
                layout
                class="tech-copy"
                :initial="
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 24, filter: 'blur(10px)' }
                "
                :animate="
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, x: 0, filter: 'blur(0px)' }
                "
                :exit="
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 18, filter: 'blur(8px)' }
                "
                :transition="copyTransition"
              >
                <TechStackDetails :tech="tech" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.li>
      </motion.ul>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v';

const props = defineProps<{
  title: string;
  techlist: string[];
}>();

const isExpanded = ref(false);
const reducedMotionPreference = usePreferredReducedMotion();
const prefersReducedMotion = computed(
  () => reducedMotionPreference.value === 'reduce',
);

const layoutTransition = {
  type: 'spring',
  stiffness: 190,
  damping: 26,
  mass: 1.05,
} as const;

const copyTransition = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1],
} as const;

const badgeTransition = {
  type: 'spring',
  stiffness: 320,
  damping: 20,
} as const;

const hoverTransition = {
  type: 'spring',
  stiffness: 280,
  damping: 18,
} as const;

const closedOffsets = [
  { x: -22, y: 16, rotate: -10 },
  { x: -10, y: -12, rotate: -4 },
  { x: 6, y: 12, rotate: 6 },
  { x: 18, y: -8, rotate: 10 },
  { x: 28, y: 16, rotate: -8 },
  { x: 12, y: -18, rotate: 8 },
  { x: -8, y: 10, rotate: -6 },
  { x: -26, y: -6, rotate: 5 },
  { x: 22, y: 10, rotate: -5 },
];

function toggleInteractiveStack() {
  isExpanded.value = !isExpanded.value;
}

function getEntryAnimation(index: number) {
  if (isExpanded.value) {
    return {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
    };
  }

  const offset = closedOffsets[index % closedOffsets.length];

  return {
    x: offset.x,
    y: offset.y,
    rotate: offset.rotate,
    opacity: 1,
  };
}

function getEntryTransition(index: number) {
  const isOpening = isExpanded.value;

  return {
    type: 'spring',
    stiffness: isOpening ? 185 : 240,
    damping: isOpening ? 24 : 22,
    mass: isOpening ? 1.02 : 0.88,
    delay: isOpening
      ? 0.06 + index * 0.05
      : (props.techlist.length - index) * 0.02,
  } as const;
}

function getTechLogo(tech: string) {
  const extensions: Record<string, string> = {
    firebase: 'svg',
    golang: 'svg',
    vite: 'svg',
  };

  return `/images/logos/${tech}.${extensions[tech] ?? 'png'}`;
}
</script>

<style scoped>
h3 {
  margin-bottom: 0.5em;
}

.tech-stack-wrapper {
  position: relative;
  margin-bottom: 2.5em;
}

.tech-stage {
  --stage-bg: #fffaf4;
  --stage-border: rgba(42, 32, 24, 0.12);
  --stage-accent: #ffd9bf;
  --entry-bg: #fffdf9;
  --entry-border: rgba(42, 32, 24, 0.1);
  --copy-bg: rgba(255, 255, 255, 0.6);
  position: relative;
  padding: 1.4rem;
  border: 1px solid var(--stage-border);
  border-radius: 10px;
  background: var(--stage-bg);
  box-shadow: none;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  isolation: isolate;
}

.tech-stage::before {
  content: '';
  position: absolute;
  inset: 0.75rem -0.75rem -0.75rem 0.75rem;
  border-radius: 10px;
  background: var(--stage-accent);
  opacity: 0.65;
  z-index: -2;
}

.tech-stage::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.045) 0, rgba(0, 0, 0, 0.045) 1px, transparent 1px, transparent 100%),
    linear-gradient(var(--stage-bg), var(--stage-bg));
  background-size:
    18px 18px,
    auto;
  opacity: 0.35;
  pointer-events: none;
  z-index: -1;
}

.tech-stage-favorites {
  --stage-bg: #fffaf3;
  --stage-border: rgba(92, 62, 32, 0.14);
  --stage-accent: #ffd8b8;
  --entry-bg: #fffef9;
  --entry-border: rgba(92, 62, 32, 0.12);
  --copy-bg: #fff5eb;
}

.tech-stage-others {
  --stage-bg: #f8fbff;
  --stage-border: rgba(58, 79, 102, 0.14);
  --stage-accent: #cae0f4;
  --entry-bg: #fcfeff;
  --entry-border: rgba(58, 79, 102, 0.12);
  --copy-bg: #eef6fd;
}

.tech-stage:focus-visible {
  box-shadow:
    0 0 0 3px rgba(42, 32, 24, 0.08);
}

.tech-stage.expanded {
  padding-bottom: 1.6rem;
}

.tech-stage-toolbar {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.tech-stage-hint {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(52, 42, 34, 0.72);
}

.tech-stage-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 8px;
  font-size: 1.6rem;
  line-height: 1;
  color: rgba(52, 42, 34, 0.88);
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(42, 32, 24, 0.1);
  box-shadow: none;
  flex-shrink: 0;
}

.tech-constellation {
  position: relative;
  z-index: 1;
  width: 100%;
  list-style-type: none;
  padding: 0.6rem 0 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

.tech-constellation.expanded {
  flex-direction: column;
  align-items: stretch;
  gap: 0.7rem;
}

.tech-entry {
  flex: 0 0 auto;
}

.tech-entry.expanded {
  width: 100%;
}

.tech-card {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-height: 5rem;
}

.tech-entry:not(.expanded) .tech-card {
  justify-content: center;
}

.tech-entry:not(.expanded):nth-child(3n + 1) {
  transform: rotate(-3deg);
}

.tech-entry:not(.expanded):nth-child(3n + 2) {
  transform: rotate(2deg);
}

.tech-entry:not(.expanded):nth-child(3n + 3) {
  transform: rotate(-1deg);
}

.tech-icon-shell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.75rem;
  height: 5.75rem;
  padding: 0.45rem;
  border-radius: 8px;
  background: var(--entry-bg);
  border: 1px solid var(--entry-border);
  box-shadow: none;
  flex-shrink: 0;
}

.tech-entry.expanded .tech-icon-shell {
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 8px;
}

.icon {
  object-fit: contain;
  width: 4rem;
  height: 4rem;
}

.tech-entry.expanded .icon {
  width: 3.75rem;
  height: 3.75rem;
}

.tech-copy {
  flex: 1;
  min-width: 0;
  padding: 1rem 1.05rem;
  border-radius: 8px;
  background: var(--copy-bg);
  border: 1px solid var(--entry-border);
}

.tech-entry.expanded {
  position: relative;
}

.tech-entry.expanded .tech-card {
  position: relative;
  padding: 0.85rem;
  border: 1px solid var(--entry-border);
  border-radius: 8px;
  background: var(--entry-bg);
}

.tech-entry.expanded:nth-child(odd) .tech-card {
  margin-right: 1rem;
}

.tech-entry.expanded:nth-child(even) .tech-card {
  margin-left: 1rem;
}

@media (max-width: 767px) {
  .tech-stage {
    padding: 1rem;
    border-radius: 8px;
  }

  .tech-stage::before {
    inset: 0.55rem -0.55rem -0.55rem 0.55rem;
    border-radius: 8px;
  }

  .tech-stage::after {
    border-radius: 8px;
  }

  .tech-stage-toolbar {
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .tech-stage-hint {
    font-size: 0.72rem;
    letter-spacing: 0.12em;
  }

  .tech-constellation {
    gap: 0.75rem;
  }

  .tech-card,
  .tech-entry.expanded .tech-card {
    align-items: flex-start;
  }

  .tech-entry.expanded .tech-card {
    flex-direction: column;
    gap: 0.8rem;
    margin-left: 0;
    margin-right: 0;
  }

  .tech-icon-shell,
  .tech-entry.expanded .tech-icon-shell {
    width: 4.9rem;
    height: 4.9rem;
    border-radius: 8px;
  }

  .icon,
  .tech-entry.expanded .icon {
    width: 3.4rem;
    height: 3.4rem;
  }

  .tech-copy {
    width: 100%;
    padding: 0.95rem 1rem;
  }
}
</style>
