<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 md8 offset-sm2>
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap v-if="hasResult">
              <v-flex v-for="post in posts" v-bind:key="post.id" xs4 d-flex>
                <v-content>
                  <figure>
                    <v-img
                      :src="post.urlToImage"
                      :lazy-src="post.urlToImage"
                      aspect-ratio="1"
                      class="grey lighten-2"
                      alt
                    />
                  </figure>
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
      //const baseURI ="https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-04&sortBy=publishedAt&apiKey=5ed7cecaa24949c9868af2e47f81b774";
      axios.get(baseURI).then(result => {
        this.posts = result.data.articles;
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