import { defineStore } from "pinia"

// ref number, string
// computed
// reactive {}, Map, Set

interface PostsState {
    foo: string
}

export const usePosts = defineStore("posts",{
    state: () =>({
        foo: "foo"
    }),

    actions: {
        updateFoo (foo: string) {
            this.foo = foo
        }
    }
})

