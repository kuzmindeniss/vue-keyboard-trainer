<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import TextStringLetter from "./TextStringLetter.vue";
const props = defineProps<{
    text: string;
    currentPosition: number;
    failIndexes: {[key: number]: boolean};
}>();

const typedLetters = computed(() => {
    const typedString = props.text.slice(0, props.currentPosition);
    return ([...typedString]);
});

const noTypedString = computed(() => {
    return props.text.slice(props.currentPosition);
});

const typedString = ref<Element>();
const notypedFirstLetter = ref<Element>();

const styleObject = computed(() => {
    const pos = props.currentPosition;
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
                <TextStringLetter v-for="(letter, index) in typedLetters" :letter="letter" :index="index" :key="index + letter" :fail-indexes="failIndexes"/>
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
    // border-left: 3px solid rgba(0, 0, 0, 1);
    // animation: pressopacity 2s infinite ease-in-out;
    // animation-fill-mode: forwards;
    // animation-direction: alternate;

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