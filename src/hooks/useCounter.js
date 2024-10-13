import { ref, computed } from 'vue';

export default function useCounter() {
  const num = ref(0);

  const doubles = computed(() => num.value * 2);

    const increment = () => num.value++;
    
    return {
        num,
        doubles,
        increment
    }
}
