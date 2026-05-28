<template>
  <Page class="events">
    <ActionBar title="Find Writing Events Near You!" />

    <StackLayout class="container">
      <ScrollView>
        <StackLayout>
          <StackLayout class="map" orientation="horizontal">
            <MapView
              :lat="51.4742657"
              :lng="-0.0804932"
              :zoom="18"
              @ready=""
              @mapTap=""
              @mapLongPress=""
              @markerTap=""
            />
          </StackLayout>
          <StackLayout
            v-for="(item, index) in items"
            :key="item.id"
            class="event-examples"
            orientation="horizontal"
          >
            <Label :text="item.text" class="text" textWrap="true" />
            <Label
              :text="item.isFavorited ? '★' : '☆'"
              class="star"
              @tap="toggleFavorite(item)"
            />
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import { createApp, registerElement } from "nativescript-vue";
import GoogleMaps from "@nativescript/google-maps/vue";
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          text: "Vauxhall: Coffee and Journal Club...",
          isFavorited: false,
        },
        {
          id: 1,
          text: "Peckham: Scrapbook and Zine-Making Fair...",
          isFavorited: false,
        },
        {
          id: 2,
          text: "Camberwell: Weekly Writing Club...",
          isFavorited: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(item) {
      item.isFavorited = !item.isFavorited;
    },
  },
};
</script>

<style>
.events {
  background-color: #fffeec;
}

.container {
  padding: 16;
}

.map {
  background-color: #fff;
  border-width: 3px;
  border-color: #000000;
  height: 1000px;
  margin-bottom: 45;
  align-items: center;
}

.event-examples {
  background-color: #fff;
  border-width: 3px;
  border-color: #000000;
  padding: 25;
  margin-bottom: 35;
  align-items: center;
}

.text {
  font-size: 18;
  margin-right: 20;
  font-family: "Erode", "Erode-Semibold";
  font-weight: 600;
}

.star {
  font-size: 25;
}
</style>
