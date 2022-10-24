<template>
  <div class="search-box">
    <BaseInput
      v-model="keyword"
      type="text"
      label="Search..."
      @input="updateKeyword"
    />
  </div>
  <div class="events">
    <EventCard
      class="event"
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page
      </router-link>

      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "EventListView",
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
      keyword: null,
    };
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.events = response.data;
          comp.totalEvents = response.headers["x-total-count"];
        });
      })
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
  beforeRouteUpdate(routeTo) {
    var queryFunction;
    if (this.keyword == null || this.keyword === "") {
      queryFunction = EventService.getEvents(
        3,
        parseInt(routeTo.query.page) || 1
      );
    } else {
      queryFunction = EventService.getEventByKeyword(
        this.keyword,
        3,
        parseInt(routeTo.query.page) || 1
      );
    }

    queryFunction
      .then((response) => {
        this.events = response.data; // <---
        this.totalEvents = response.headers["x-total-count"]; // <---
      })
      .catch(() => {
        return { name: "NetworkError" }; // <---
      });
  },
  methods: {
    updateKeyword() {
      var queryFunction;
      if (this.keyword === "") {
        queryFunction = EventService.getEvents(3, 1);
      } else {
        queryFunction = EventService.getEventByKeyword(this.keyword, 3, 1);
      }

      queryFunction
        .then((response) => {
          this.events = response.data;
          console.log(this.events);
          this.totalEvents = response.headers["x-total-count"];
          console.log(this.totalEvents);
        })
        .catch(() => {
          return { name: "NetworkError" };
        });
    },
  },

  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalEvents / 3);
      return this.page < totalPages;
    },
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  display: inline-block;
}
.pagination {
  display: flex;
  width: 830px;
  font-size: 25px;
  border: 1px #39495c;
  /* margin-bottom: 18px; */
  /* background-color: rgb(245, 252, 251); */
  border-radius: 25px;
}

.pagination a {
  flex: 1;
  /* display: flex; */
  text-decoration: none;
  color: #000000;
  /* border: 1px #39495c;
  margin-bottom: 18px;
  background-color: rgb(245, 252, 251); */
  /* border-radius: 25px; */
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

.search-box {
  width: 300px;
  flex-direction: column;
  text-align: center;
  margin-left: 680px;
}
.event {
  display: inline-block;
}
</style>
