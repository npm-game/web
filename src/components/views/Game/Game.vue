<script lang="ts" src="./Game.ts"></script>

<template>
    <div class="GameComponent container" v-if="IsReady">
        <h2>Welcome back, {{Identity.UserName}}</h2>

        <hr>

        <button type="button" class="btn btn-outline-primary" @click="JoinGame">
            Join Game
        </button>

        <button type="button" class="btn btn-primary" @click="StartGame">
            Start Game
        </button>

        <hr>

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <pre class="m-0">{{Game}}</pre>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <pre class="m-0">{{GameLog.join('\n')}}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>