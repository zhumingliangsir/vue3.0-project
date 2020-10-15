import { createStore } from "vuex";
import { testData, testPosts, ColumnProps, PostProps } from "./testData";
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: true, name: "koma", columnId: 1 }
  },
  getters: {
    biggerColumnsLen(state) {
      return state.columns.filter(c => c.id > 2).length;
    },
    getColumnById: state => (id: number) => {
      return state.columns.find(c => c.id === id);
    },
    getPostsByCid: state => (cid: number) => {
      return state.posts.filter(c => c.columnId === cid);
    }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: "超级管理员" };
    },
    createPost(state, newPost) {
      state.posts.push(newPost);
    }
  }
});

export default store;
