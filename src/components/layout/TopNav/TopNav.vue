<style lang="scss" src="./TopNav.scss"></style>

<template>
    <nav class="TopNavComponent navbar navbar-expand fixed-top navbar-dark bg-primary">
        <router-link class="navbar-brand" :to="{name: 'home'}">
            <div class="row align-items-center">
                <div class="col">
                    <div class="h3">
                        NPM Game
                    </div>
                </div>
            </div>
        </router-link>

        <ul class="navbar-nav d-none d-md-flex">
            <li class="nav-item active">
                <router-link class="btn nav-link" :to="{name: 'home'}">
                    Home
                </router-link>
            </li>
        </ul>
    </nav>
</template>
