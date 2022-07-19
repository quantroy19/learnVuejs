function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let currenRount = 0;
let logMessage = [];
const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            yourHealth: 100,
            currenRount: 0,
            win: false,
            logMessage: []
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },
        yourBarStyles() {
            return { width: this.yourHealth + '%' };
        },
        rountCanUsespecialAttackMonster() {
            return this.currenRount % 3 !== 0;
        },
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.yourHealth <= 0) {
                this.win = 'draw';
            } else if (value <= 0) {
                this.win = 'moster';
            }
        },
        yourHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.win = 'draw';
            } else if (value <= 0) {
                this.win = 'your';
            }
        },
    },
    methods: {
        attckMonster() {
            this.currenRount++;
            const attackValue = getRandomValue(5, 14);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.monsterHealth <= 0 ? this.monsterHealth = 0 : this.monsterHealth;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        attackPlayer() {
            const attackValue = getRandomValue(5, 17);
            this.yourHealth -= attackValue;
            this.yourHealth <= 0 ? this.yourHealth = 0 : this.yourHealth;
            this.addLogMessage('your', 'attack', attackValue);

        },
        specialAttackMonster() {
            this.currenRount++;
            const attackValue = getRandomValue(5, 14) * 2;
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.monsterHealth <= 0 ? this.monsterHealth = 0 : this.monsterHealth;
            this.addLogMessage('your', 'attack', attackValue);

        },
        healYour() {
            this.currenRount++;
            const healValue = getRandomValue(5, 14);
            if (this.yourHealth + healValue > 100) {
                this.yourHealth = 100;
            } else {
                this.yourHealth += healValue;
            }
            addLogMessage('your', 'heal', healValue);
            this.attackPlayer();

        },
        surrender() {
            this.yourHealth = 0;
            alert('Bạn đã đầu hàng, nhục quá!!!');
        },
        addLogMessage(who, what, value) {
            this.logMessage.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
        start() {
            this.monsterHealth = 100;
            this.yourHealth = 100;
            this.win = false;
            this.logMessage = null;
        },
    }
});
app.mount('#game');