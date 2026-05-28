<template>
  <Page class="new-entry">
    <ActionBar title="New Entry" />
    <ScrollView>
      <StackLayout class="container">
        <StackLayout class="prompt-text">
          <Label :text="getTodaysPrompt()" textWrap="true" />
        </StackLayout>
        <StackLayout class="entry">
          <TextView
            v-model="entryText"
            class="entry-text"
            hint="Write your thoughts..."
            textWrap="true"
          />
          <DatePicker
            :date="date"
            class="entry-date"
            @dateChange="onDateChange"
          />
          <Button
            class="photo-button"
            text="Add a photo"
            horizontalAlignment="center"
            @tap="pickImage"
          />
          <Image
            v-if="imagePath"
            :src="imagePath"
            stretch="aspectFill"
            height="200"
          />
        </StackLayout>
        <StackLayout class="save">
          <Button
            class="save-button"
            text="Save your FieldNotes"
            horizontalAlignment="center"
            @tap="saveEntry"
          />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import {
  alert,
  confirm,
  Image,
  Dialogs,
  knownFolders,
  path,
  ImageSource,
  fromView,
} from "@nativescript/core";
import * as imagePickerPlugin from "@nativescript/imagepicker";
import * as camera from "@nativescript/camera";
import { nanoid } from "nanoid/non-secure";
import { ref, reactive, $navigateBack } from "nativescript-vue";

export default {
  data() {
    return {
      entryText: "",
      imagePath: "",
      date: new Date(),
      prompts: [
        "Are you taking enough risks in life?",
        "Consider and reflect, what is your favourite 'failure'",
        "How did you meet your best friend?",
        "This world would be a lot better if...",
        "What is an affirmation you can take into the rest of today?",
      ],
    };
  },
  methods: {
    getTodaysPrompt() {
      const today = new Date();
      const promptIndex = today.getDate() % this.prompts.length;
      return this.prompts[promptIndex];
    },
    async pickImage() {
      const action = await confirm({
        title: "Select an image",
        message: "Add a photo to your FieldNotes!",
        okButtonText: "Library",
        cancelButtonText: "Camera",
      });

      if (action) {
        const imagePickerObj = imagePickerPlugin.create({
          mode: "single",
        });

        const authResult = await imagePickerObj.authorize();
        if (authResult.authorized) {
          const [selection] = await imagePickerObj.present();
          if (selection) {
            this.imagePath = selection.path;
            console.log("Image selected: ", this.imagePath);
          }
        }
      } else {
        try {
          await camera.requestCameraPermissions();
          if (camera.isAvailable()) {
            const imageAsset = await camera.takePicture({
              saveToGallery: false,
            });

            const filePath = path.join(documents.path, `${nanoid()}.jpg`);
            const img = await ImageSource.fromAsset(imageAsset);
            const saved = img.saveToFile(filePath, "jpg");

            if (saved) {
              this.imagePath = filePath;
              console.log("Image saved at: ", filePath);
            }
          }
        } catch (err) {
          console.error(err);
          console.log("No picture taken");
        }
      }
    },
    onDateChange(event) {
      this.date = event.value;
    },
    saveEntry() {
      const entry = {
        text: this.entryText,
        image: this.imagePath,
        date: this.date,
      };
      const alertOptions = {
        title: "Your FieldNotes",
        message: "Are you ready to save your FieldNotes?",
        okButtonText: "Save",
        cancelButtonText: "Cancel",
      };

      confirm(alertOptions).then((result) => {
        if (result) {
          console.log(`User saved this entry on ${this.date.toDateString()}`);
          this.date = new Date();
          this.imagePath = "";
          this.entryText = "";
          //chatgpt helped with clearing text once it has been 'saved'
        }
      });
    },
  },
};
</script>

<style>
.new-entry {
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

.save {
  background-color: #fff;
  border-width: 3px;
  border-color: #000000;
}

.save-button {
  font-size: 14;
  font-family: "Recia", "Recia-Regular";
  font-weight: 400;
  text-align: center;
}

.prompt-text {
  font-size: 14;
  font-family: "Erode", "Erode-SemiboldItalic";
  font-weight: 600;
  text-align: center;
  margin-bottom: 15;
}
</style>
