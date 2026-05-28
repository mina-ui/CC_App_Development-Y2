<template>
  <Page class="entries">
    <ActionBar title="Journal Entries" />

    <GridLayout rows="auto, *, auto" class="container">
      <SearchBar hint="See your past entries..." class="search" row="0" />

      <ScrollView row="1">
        <StackLayout>
          <StackLayout
            class="entry-cards"
            orientation="horizontal"
            @tap="goToExampleEntry"
          >
            <Label
              text="Dear diary, what did I do today?? Well..."
              class="entry-text"
              textWrap="true"
            />

            <Label text="♡" class="heart" />
          </StackLayout>
          <StackLayout
            v-for="(entry, index) in entries"
            :key="index"
            class="entry-cards"
            orientation="horizontal"
          >
            <Label :text="entry.text" class="entry-text" textWrap="true" />
            <Label
              :text="entry.isLiked ? '♥︎' : '♡'"
              class="heart"
              @tap="toggleLiked(entry)"
            />
          </StackLayout>
        </StackLayout>
      </ScrollView>

      <GridLayout row="2" columns="*,*,*" class="nav-bar">
        <Label col="0" text="✎" class="nav-icons" />
        <Label col="1" text="+" class="nav-icons" @tap="goToNewEntry" />
        <Label col="2" text="⌯⌲" class="nav-icons" @tap="goToFindEvents" />
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script>
import NewEntry from "./NewEntry.vue";
import FindEvents from "./FindEvents.vue";
import * as imagePickerPlugin from "@nativescript/imagepicker";
import ExampleEntry from "./ExampleEntry.vue";

export default {
  components: {
    NewEntry,
    FindEvents,
  },
  data() {
    return {
      entries: [
        {
          text: "Dear diary, today was so sunny and I enjoyed a picnic with my friends...",
          isLiked: false,
        },
        {
          text: "Yesterday was super busy, but hopefully after today things will get easier. I am especially excited for...",
          isLiked: false,
        },
        {
          text: "Look! here are all the photos I took on the hike today! It was SO hard but...",
          isLiked: false,
        },
        {
          text: "Dear diary, today was so sunny and I enjoyed a picnic with my friends...",
          isLiked: false,
        },
        {
          text: "Yesterday was super busy, but hopefully after today things will get easier. I am especially excited for...",
          isLiked: false,
        },
        {
          text: "Look! here are all the photos I took on the hike today! It was SO hard but...",
          isLiked: false,
        },
        {
          text: "Dear diary, today was so sunny and I enjoyed a picnic with my friends...",
          isLiked: false,
        },
        {
          text: "Yesterday was super busy, but hopefully after today things will get easier. I am especially excited for...",
          isLiked: false,
        },
        {
          text: "Look! here are all the photos I took on the hike today! It was SO hard but...",
          isLiked: false,
        },
      ],
    };
  },
  methods: {
    goToExampleEntry() {
      this.$navigateTo(ExampleEntry);
    },
    toggleLiked(entry) {
      entry.isLiked = !entry.isLiked;
    },
    goToNewEntry() {
      this.$navigateTo(NewEntry);
    },
    goToFindEvents() {
      this.$navigateTo(FindEvents);
    },
  },
};
</script>

<style>
.entries {
  background-color: #fffeec;
}

.container {
  padding: 16;
}

.search {
  border-width: 3px;
  border-color: #000000;
  font-size: 14;
  width: 85%;
  font-family: "Recia", "Recia-Regular";
  font-weight: 400;
}

.entry-cards {
  background-color: #fff;
  border-width: 3px;
  border-color: #000000;
  padding: 25;
  margin-bottom: 35;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.entry-text {
  font-size: 14;
  width: 75%;
  font-family: "Recia", "Recia-Regular";
  font-weight: 400;
}

.heart {
  font-size: 24;
}

.nav-icons {
  font-size: 28;
  margin-left: 45;
}

.nav-bar {
  height: 60;
  background-color: #c6f0b0;
  justify-content: space-between;
  align-items: center;
}
</style>
