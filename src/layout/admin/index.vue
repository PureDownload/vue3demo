<template>
    <div class="admin-layout default-theme c-flex c-h-w-100h">
        <Sidebar />
        <div class="right-main c-flex-1 c-flex c-flex-direction-column">
            <Navbar />
            <TagsView />
            <AppMain class="c-flex-1" />
        </div>
    </div>
</template>
<script setup>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar.vue'
import TagsView from './components/TagsView/index.vue'
import AppMain from './components/AppMain.vue'
</script>