<template>
  <div id="itemList">
    <p class="filter">
      <span
        @click="visibility = 'all'"
        :class="{ selected: visibility == 'all' }"
        >所有</span
      >
      <span
        @click="visibility = 'active'"
        :class="{ selected: visibility == 'active' }"
        >未完成</span
      >
      <span
        @click="visibility = 'completed'"
        :class="{ selected: visibility == 'completed' }"
        >已完成</span
      >
    </p>
    <input
      type="text"
      v-model="newItem"
      @keyup.enter="addItem"
      autofocus
      placeholder="请输入..."
      autocomplete="off"
    />
    <ul>
      <li
        v-for="item in filterItems"
        :key="item.id"
        :class="{ completed: item.completed, editing: item === editedItem }"
      >
        <div class="view">
          <input type="checkbox" v-model="item.completed" />
          <label @dblclick="editItem(item)">{{ item.title }}</label>
          <button @click="delItem(item)" style="margin-left: 20px">删除</button>
        </div>
        <input
          class="edit"
          type="text"
          v-item-focus="item === editedItem"
          v-model="item.title"
          @keyup.enter="doneItem(item)"
          @blur="doneItem(item)"
          @keyup.escape="cancelEdit(item)"
        />
      </li>
    </ul>
  </div>
</template>


<script lang='ts'>
import { computed, reactive, toRefs, watchEffect } from "vue";
const filters = {
  all(items) {
    return items;
  },
  active(items) {
    return items.filter((item) => !item.completed);
  },
  completed(items) {
    return items.filter((item) => item.completed);
  },
};

const itemStorage = {
  fetch() {
    let items = JSON.parse(localStorage.getItem("itemList") || "[]");
    return items;
  },
  set(items) {
    localStorage.setItem("itemList", JSON.stringify(items));
  },
};
export default {
  name: "",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      newItem: "",
      items: itemStorage.fetch(),
      editedItem: null,
      beforeEditCache: "",
      visibility: "all",
      filterItems: computed(() => {
        return filters[state.visibility](state.items);
      }),
    });

    function addItem() {
      state.items.push({
        id: state.items.length + 1,
        title: state.newItem,
        completed: false,
      });
      state.newItem = "";
    }

    function delItem(item) {
      state.items.splice(state.items.indexOf(item), 1);
    }

    function editItem(item) {
      state.beforeEditCache = item.title;
      state.editedItem = item;
    }

    function cancelEdit(item) {
      item.title = state.beforeEditCache;
      state.editedItem = null;
    }

    function doneItem(item) {
      state.editedItem = null;
    }

    watchEffect(() => {
      itemStorage.set(state.items);
    });

    return {
      ...toRefs(state),
      addItem,
      delItem,
      editItem,
      cancelEdit,
      doneItem,
    };
  },
  directives: {
    // 自定义指令 第一个参数是自己，第二个是bind
    "item-focus": (el, { value }) => {
      if (value) el.focus();
    },
  },
};
</script>

<style scoped>
#itemList {
  text-align: left;
  margin-left: 10px;
}
ul {
  list-style: none;
  padding-inline-start: 0px;
}
.completed label {
  text-decoration: line-through;
}

.edit,
.editing .view {
  display: none;
}

.view,
.editing .edit {
  display: block;
}

.filter > span {
  padding: 2px 5px;
  margin-right: 5px;
  border: 1px solid transparent;
}

.filter > span.selected {
  border-color: royalblue;
}
</style>