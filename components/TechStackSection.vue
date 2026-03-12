<template>
  <div class="tech-stack-wrapper">
    <h3>{{ $t(`TechStack.${title}`) }}</h3>

    <motion.div
      layout
      class="tech-stage"
      :class="{ expanded: isExpanded }"
      role="button"
      tabindex="0"
      :aria-expanded="String(isExpanded)"
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
      <motion.div
        class="tech-stage-glow"
        :animate="
          prefersReducedMotion
            ? undefined
            : isExpanded
              ? { opacity: 1, scale: 1 }
              : { opacity: 0.8, scale: 0.94 }
        "
        :transition="glowTransition"
      />

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
              <img :src="`/images/logos/${tech}.png`" :alt="tech" class="icon" />
            </motion.div>

            <AnimatePresence initial="false" mode="popLayout">
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
import { AnimatePresence, motion, useReducedMotion } from 'motion-v';

const props = defineProps<{
  title: string;
  techlist: string[];
}>();

const isExpanded = ref(false);
const prefersReducedMotion = useReducedMotion();

const layoutTransition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 0.9,
};

const copyTransition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1],
};

const glowTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

const badgeTransition = {
  type: 'spring',
  stiffness: 320,
  damping: 20,
};

const hoverTransition = {
  type: 'spring',
  stiffness: 280,
  damping: 18,
};

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
  return {
    type: 'spring',
    stiffness: 250,
    damping: 22,
    mass: 0.85,
    delay: isExpanded.value ? index * 0.035 : (props.techlist.length - index) * 0.02,
  };
}
</script>

<style scoped>
h3 {
  margin-bottom: 0.5em;
}

.tech-stack-wrapper {
  margin-bottom: 2.5em;
}

.tech-stage {
  --stage-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(241, 244, 249, 0.92));
  --stage-border: rgba(15, 23, 42, 0.12);
  --stage-shadow: 0 24px 70px rgba(15, 23, 42, 0.12);
  position: relative;
  padding: 1.25rem;
  border: 1px solid var(--stage-border);
  border-radius: 32px;
  background: var(--stage-bg);
  box-shadow: var(--stage-shadow);
  overflow: hidden;
  cursor: pointer;
  outline: none;
  isolation: isolate;
}

.tech-stage:focus-visible {
  box-shadow:
    0 0 0 3px rgba(15, 23, 42, 0.14),
    0 24px 70px rgba(15, 23, 42, 0.12);
}

.tech-stage.expanded {
  padding-bottom: 1.5rem;
}

.tech-stage-glow {
  position: absolute;
  inset: -25% auto auto 50%;
  width: min(72vw, 540px);
  aspect-ratio: 1;
  transform: translateX(-50%);
  background:
    radial-gradient(circle, rgba(116, 208, 255, 0.32), rgba(116, 208, 255, 0) 56%),
    radial-gradient(circle at 65% 35%, rgba(255, 194, 102, 0.28), rgba(255, 194, 102, 0) 42%);
  pointer-events: none;
  z-index: -1;
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
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #4a5565;
}

.tech-stage-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  font-size: 1.6rem;
  line-height: 1;
  color: #132238;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(19, 34, 56, 0.1);
  box-shadow: 0 8px 24px rgba(19, 34, 56, 0.1);
  flex-shrink: 0;
}

.tech-constellation {
  position: relative;
  z-index: 1;
  width: 100%;
  list-style-type: none;
  padding: 0.4rem 0 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
}

.tech-constellation.expanded {
  flex-direction: column;
  align-items: stretch;
  gap: 0.85rem;
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
  gap: 1rem;
  min-height: 5.5rem;
}

.tech-entry:not(.expanded) .tech-card {
  justify-content: center;
}

.tech-icon-shell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.75rem;
  height: 5.75rem;
  border-radius: 1.6rem;
  background:
    linear-gradient(150deg, rgba(255, 255, 255, 0.96), rgba(246, 248, 252, 0.82));
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    0 14px 34px rgba(15, 23, 42, 0.08);
  flex-shrink: 0;
}

.tech-entry.expanded .tech-icon-shell {
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 1.35rem;
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
  border-radius: 1.35rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(15, 23, 42, 0.07);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
}

@media (max-width: 767px) {
  .tech-stage {
    padding: 1rem;
    border-radius: 28px;
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
  }

  .tech-icon-shell,
  .tech-entry.expanded .tech-icon-shell {
    width: 4.9rem;
    height: 4.9rem;
    border-radius: 1.25rem;
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
