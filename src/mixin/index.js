/**
 * 全局混入
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.mixin({
    data() {
        return {
            tableCloumnWidth: {
                w50: 50,
                w100: 100,
                w150: 150,
                w200: 200,
                w250: 250,
                w300: 300
            }
        };
    },
    computed: {
        ...Vuex.mapState(['globalData', 'token', 'loginData'])
    },
    methods: {
        // 通用突变
        ...Vuex.mapMutations(['mutation']),
        // 通用动作
        ...Vuex.mapActions(['action']),
        // 公共跳转封装
        goUrl(options) {
            this.$router.push(options);
        }
    }
});
