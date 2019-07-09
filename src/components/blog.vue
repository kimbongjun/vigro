<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 md8 offset-sm2>
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap v-if="hasResult">
              <v-flex v-for="post in posts" v-bind:key="post.id" xs4 d-flex>
                <v-content>
                  <h1>{{post.title}}</h1>
                </v-content>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
const axios = require("axios");
export default {
  name: "blog",
  data() {
    return {
      title: "Blog",
      posts: []
    };
  },
  computed: {
    hasResult() {
      const baseURI = "https://jsonplaceholder.typicode.com/todos";
      axios.get(baseURI).then(result => {
        this.posts = result.data;
        console.log(this.posts);
        this.isLoading = false;
      });
      return this.posts.length > 0;
    }
  },
  methods: {}
};
</script>
<style scoped>
</style>