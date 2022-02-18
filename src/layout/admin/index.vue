<template>
    <div class="admin-layout common-flex common-h-w-100h">
        <Sidebar />
        <div class="right-main common-flex-1 common-flex common-flex-direction-column">
            <Navbar />
            <TagsView />
            <AppMain class="common-flex-1" />
        </div>
    </div>
</template>
<script setup>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar.vue'
import TagsView from './components/TagsView/index.vue'
import AppMain from './components/AppMain.vue'
</script>