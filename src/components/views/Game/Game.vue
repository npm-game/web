<script lang="ts" src="./Game.ts"></script>

<template>
    <div class="GameComponent container" v-if="IsReady">
        <h2>Welcome back, {{Identity.UserName}}</h2>

        <hr>

        <div class="row">
            <div class="col">
                <pre>
                    {{Game}}
                </pre>
            </div>
            <div class="col">
                <pre>
                    {{GameLog.join('\n')}}
                </pre>
            </div>
        </div>
    </div>
</template>