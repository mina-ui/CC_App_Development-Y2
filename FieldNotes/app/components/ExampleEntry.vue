<template>
  <Page class="example-entry">
    <ActionBar title="Example Entry" />
    <StackLayout class="container">
      <StackLayout class="entry">
        <Label
          text="Dear diary, what did I do today?? Well..."
          class="entry-text"
          textWrap="true"
          verticalAlignment="top"
        />
        <Label
          text="3rd April 2024"
          class="entry-date"
          verticalAlignment="bottom"
        />
      </StackLayout>
      <StackLayout class="edit-button" orientation="horizontal">
        <Button
          class="edit"
          text="Edit"
          horizontalAlignment="center"
          @tap="editEntry"
        />
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
import { confirm } from "@nativescript/core";

export default {
  methods: {
    editEntry() {
      const confirmOptions = {
        title: "Do you want to edit this entry?",
        message: "When editing you may lose unsaved changes.",
        okButtonText: "Edit",
        cancelButtonText: "Cancel",
      };

      confirm(confirmOptions).then((result) => {
        if (result) {
          console.log("User edited this entry");
        }
      });
    },
  },
};
</script>

<style>
.example-entry {
  background-color: #fffeec;
}

.container {
  padding: 50;
}

.entry {
  background-color: #fff;
  border-width: 3px;
  border-color: #000000;
  height: 575;
  padding: 25;
  margin-bottom: 25;
}

.entry-text {
  font-size: 14;
  width: 85%;
  font-family: "Recia", "Recia-Regular";
  font-weight: 400;
}

.entry-date {
  font-size: 12;
  font-family: "Recia", "Recia-Italic";
  font-style: italic;
  font-weight: 400;
  horizontal-align: right;
}

.edit-button {
  background-color: #fff;
  border-width: 3px;
  border-color: #000000;
}

.edit {
  font-size: 14;
  width: 85%;
  font-family: "Recia", "Recia-Regular";
  font-weight: 400;
}
</style>
