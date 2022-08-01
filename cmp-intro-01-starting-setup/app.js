const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: ' Lorent',
                    phone: '01234 567 890',
                    email: 'abcd@gmail.com',
                },
            ],
        };
    },
});

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" :key="friend.id">
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails()">
        {{ detailAreVisible ? 'Hide' : 'Show'}} Detail
        </button>
        <ul v-if="detailAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailAreVisible: false,
            friends: [
                {
                    id: 'quanquan',
                    name: 'Julie quan',
                    phone: '01234 567 891',
                    email: 'abcdef@gmail.com',
                }
            ]
        };
    },
    methods: {
        toggleDetails() {
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
});

app.mount("#app");