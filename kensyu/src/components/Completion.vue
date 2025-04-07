<script setup>
import { hydrateOnMediaQuery, ref } from 'vue'
import { useRouter } from 'vue-router'

const Home = () => {
    window.location.href = '/top';
}

const Router = useRouter();

// const Home = () => {
//     this.push({ name: 'top'});
// }
</script>

<template>
    <div class="completion">
        <h1>登録完了いたしました</h1>
        <p>Registration is now complete.</p>
    </div>
    <button @click="Home">TOPへ</button>
</template>

<style scoped>
.completion {
    text-align: center;
    padding: 10px;
}
</style>