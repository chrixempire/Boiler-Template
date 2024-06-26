import { ref, onMounted, onBeforeUnmount } from 'vue';

export default function useIntersectionObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  const elements = ref<HTMLElement[]>([]);
  const observer = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    observer.value = new IntersectionObserver(callback, options);
    elements.value.forEach(el => observer.value?.observe(el));
  });

  onBeforeUnmount(() => {
    elements.value.forEach(el => observer.value?.unobserve(el));
  });

  const addElement = (element: HTMLElement) => {
    elements.value.push(element);
    if (observer.value) {
      observer.value.observe(element);
    }
  };

  return { addElement };
}
