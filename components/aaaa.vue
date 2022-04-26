<template>
  <ais-instant-search  :search-client="searchClient" index-name="questions">
    <ais-search-box />
    <ais-hits>
      <template slot="item" slot-scope="{ item }">
        <div>
          <div class="hit-name">
            <ais-highlight :hit="item" attribute="title" />
          </div>
          <div class="hit-description">
            <ais-snippet :hit="item" attribute="body" />
          </div>
        </div>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import Badge from "./Badge";
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
export default {
  name: "MainSearch",
  components: {Badge},
  data() {
    return {
      searchClient: instantMeiliSearch(
        "https://search-savollar.nuraliev.dev/",
        "zikr2244"
      )
    }
  },

}
</script>

<style>

</style>
