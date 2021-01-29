var vm = new Vue({
    //作用域 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。
    el: "#id",
    //实例的数据对象
    data: {

    },
    //预处理 计算属性将被混入到 Vue 实
    //例中 注意get,set
    computed: {

    },
    //methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
    methods: {

    },
    //一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
    watch: {
        xxx: function(n, o) {},
        obj: {
            /*
            handler(newName, oldName) {
                console.log(newName, oldName)
            },*/
            deep: true
        }
        //vue深度监听 对象
        // handle就是你watch中需要具体执行的方法
        // deep：就是你需要监听的数据的深度，一般用来监听对象中某个属性的变化
        // immediate：在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
    },
    //在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
    beforeCreate: function() {

    },
    //过滤器
    filters: {
        capitalize: function(value, ...other) {
            console.log(value, other)
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
    },
    //在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
    created: function() {

    },
    //在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount: function() {

    },
    //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
    mounted: function() {

    },
    //数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
    beforeUpdate: function() {

    },
    /*由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
     *当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
     *注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：
     */
    updated: function() {

    },
    //activated,deactivated,
    //实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy: function() {

    },
    //实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
    destroyed: function() {

    }
});

//https://cn.vuejs.org/v2/api/#template
//https://cn.vuejs.org/v2/api/#render
//https://cn.vuejs.org/v2/api/#filters  包含 Vue 实例可用过滤器的哈希表。
//https://cn.vuejs.org/v2/api/#mixins  选项接受一个混合对象的数组
//https://cn.vuejs.org/v2/api/#extends  允许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，
//https://cn.vuejs.org/v2/api/#vm-listeners 包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
//https://cn.vuejs.org/v2/api/#vm-on 监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
//https://cn.vuejs.org/v2/api/#vm-mount

/*
 * v-text 更新元素的 textContent。如果要更新部分的 textContent ，需要使用 {{ Mustache }} 插值。 <span v-text="msg"></span>
 * v-html 更新元素的 innerHTML 。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译 。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。 <div v-html="html"></div>
 * v-show 根据表达式之真假值，切换元素的 display CSS 属性。
 * v-if 根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 <template> ，将提出它的内容作为条件块。
 * v-else 为 v-if 或者 v-else-if 添加“else 块”。
 * v-else-if  表示 v-if 的 “else if 块”。可以链式调用。
 * v-for 基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 alias in expression ，为当前遍历的元素提供别名：<div v-for="item in items">另外也可以为数组索引指定别名 (或者用于对象的键)：<div v-for="(item, index) in items"></div> v-for 默认行为试着不改变整体，而是替换元素。迫使其重新排序的元素，你需要提供一个 key 的特殊属性： <div v-for="item in items" :key="item.id">
 * v-on 绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。 https://cn.vuejs.org/v2/api/#v-on
 * v-bind 动态地绑定一个或多个特性，或一个组件 prop 到表达式。https://cn.vuejs.org/v2/api/#v-bind
 * v-model 在表单控件或者组件上创建双向绑定 .lazy - 取代 input 监听 change 事件 .number - 输入字符串转为数字 .trim - 输入首尾空格过滤
 * v-pre 跳过这个元素和它的子元素的编译过程
 * v-cloak 这个指令保持在元素上直到关联实例结束编译<div v-cloak>{{ message }}</div>
 * v-once 只渲染元素和组件一次
 *
 *
 * 特殊特性
 * key 使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素 <li v-for="item in items" :key="item.id">...</li>
 *
 *内置组件
 *
 *
 *
 *
 * */