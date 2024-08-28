<template>
    <ul>
        <li v-for="(chat, key) in chats" :key="key">
            {{ chats.name }}
        </li>
    </ul>
</template>