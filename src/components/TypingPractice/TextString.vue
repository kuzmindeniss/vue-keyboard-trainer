<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import TextStringLetter from "./TextStringLetter.vue";
import { text, currentPosition } from './TypingPracticeStore';


const typedLetters = computed(() => {
    const typedString = text.value.slice(0, currentPosition.value);
    return ([...typedString]);
});

const noTypedString = computed(() => {
    return text.value.slice(currentPosition.value);
});

const typedString = ref<Element>();
const notypedFirstLetter = ref<Element>();

const styleObject = computed(() => {
    const pos = currentPosition.value;
    if (!typedString.value || !notypedFirstLetter.value || pos === 0) return {marginLeft: 0 + 'px'}
    const width = typedString.value.getBoundingClientRect().width + notypedFirstLetter.value.getBoundingClientRect().width;
    return {
        marginLeft: -width + 'px'
    }
});


</script>

<template>
    <div class="string">
        <div class="inner-string" :style="styleObject">
            <span class="typed" ref="typedString">
                <TextStringLetter v-for="(letter, index) in typedLetters" :letter="letter" :index="index" :key="index + letter"/>
            </span>
            <span class="notyped">
                <span class="notyped-first-letter" ref="notypedFirstLetter">{{ noTypedString[0] }}</span>{{ noTypedString.slice(1) }}</span>
        </div>
    </div>
</template>

<style lang="scss">
@keyframes pressopacity {
    from {
        opacity: .8
    }
    50% {
        opacity: .3
    }
    to {
        opacity: .8
    }
}

.string {
    position: absolute;
    left: 50%;
    white-space: nowrap;
    font-size: 2rem;
    transition: all .3s;

    &:before {
        content: "";
        display: inline-block;
        position: absolute;
        left: -3px;
        top: 0;
        background-color: #000;
        opacity: .8;
        height: 100%;
        width: 3px;
        animation: pressopacity 1s infinite ease-in-out;
    }
}

.inner-string {
    transition: all .1s;
}

.letter-typed {
    color: #ccc;
}

.letter-wrong {
    color: red;
}

.notyped {
    transition: all .5s;
    white-space: nowrap;
}
</style>