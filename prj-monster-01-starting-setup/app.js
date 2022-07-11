function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            yourHealth: 100,
        }
    },
    methods: {
        attckMonster() {
            const attackValue = getRandomValue(5, 14);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.monsterHealth <= 0 ? this.monsterHealth = 0 : this.monsterHealth;
        },
        attackPlayer() {
            const attackValue = getRandomValue(5, 17);
            this.yourHealth -= attackValue;
            this.yourHealth <= 0 ? this.yourHealth = 0 : this.yourHealth;
        },
        specialAttackMonster() {
            const attackValue = getRandomValue(5, 14) * 2;
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.monsterHealth <= 0 ? this.monsterHealth = 0 : this.monsterHealth;
        },
        healYour() {
            const attackValue = getRandomValue(5, 14) / 2;
            this.yourHealth += attackValue;
        },
        surrender() {
            this.yourHealth = 0;
            alert('Bạn đã đầu hàng, nhục quá!!!');
        }
    }
});
app.mount('#game');