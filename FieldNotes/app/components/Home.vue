<template>
  <Page class="login">
    <ActionBar title="FieldNotes" class="action-bar" />

    <StackLayout class="container">
      <Image src="~/assets/logo.png" height="250" />

      <Label
        text="Welcome"
        class="h1 text-center"
        style="font-family: 'Erode', 'Erode-Semibold'; font-weight: 600"
      />
      <Label
        text="Unlock your Field Notes..."
        class="h2 text-center"
        style="font-family: 'Recia', 'Recia-Regular'; font-weight: 400"
      />

      <StackLayout orientation="horizontal" horizontalAlignment="center">
        <TextField
          class="pin"
          keyboardType="number"
          secure="true"
          maxLength="1"
          v-model="pin[0]"
        />
        <TextField
          class="pin"
          keyboardType="number"
          secure="true"
          maxLength="1"
          v-model="pin[1]"
        />
        <TextField
          class="pin"
          keyboardType="number"
          secure="true"
          maxLength="1"
          v-model="pin[2]"
        />
        <TextField
          class="pin"
          keyboardType="number"
          secure="true"
          maxLength="1"
          v-model="pin[3]"
        />
      </StackLayout>
      // the different squares for each pin

      <Button
        class="unlock-btn"
        text="Unlock"
        @tap="unlock"
        :isEnabled="isPinComplete"
      />

      <Button class="forgot-btn" text="Forgot Pin?" @tap="onForgotPin" />
      //forgot pin functionality- will create a prompt
    </StackLayout>
  </Page>
</template>

<script>
import JournalEntries from "./JournalEntries.vue";
import { prompt } from "@nativescript/core";

export default {
  data() {
    return {
      pin: ["", "", "", ""],
    };
  },
  computed: {
    isPinComplete() {
      return this.pin.every((d) => d !== "");
    },
  },

  methods: {
    unlock() {
      const enteredPin = this.pin.join("");
      const correctPin = "1234";

      console.log("Pin Entered");

      if (enteredPin === correctPin) {
        this.$navigateTo(JournalEntries);
        alert("Let's Write!");
      } else {
        alert("Incorrect PIN");
        this.pin = ["", "", "", ""];
      }
    },

    onForgotPin() {
      const promptOptions = {
        title: "Forgot Your Pin?",
        message: "Please enter your email to receive reset instructions",
        okButtonText: "Send",
        cancelButtonText: "Cancel",
        inputType: "text",
      };

      prompt(promptOptions).then((result) => {
        const email = result.text;
        const correctEmail = "example@email.com";

        if (email === correctEmail) {
          alert("An email has been sent with further instructions");
        } else if (email) {
          alert("Incorrect email, please try again.");
        }
      });
    },
  },
};
//mockup of a pin recovery process
</script>

<style>
.login {
  background-color: #fffeec;
}

.container {
  vertical-align: center;
  horizontal-align: center;
  justify-content: center;
  align-items: center;
  padding: 30;
}

h1 {
  font-size: 48;
}

h2 {
  font-size: 24;
}

.unlock-btn {
  background-color: #c6f0b0;
  border-width: 1;
  border-color: #000000;
  color: #000000;
  padding: 15px 32px;
  text-align: center;
}

.forgot-btn {
  background-color: transparent;
  color: blue;
  margin-top: 10;
  font-size: 12;
  text-decoration: underline;
}

.pin {
  width: 55;
  height: 55;
  font-size: 24;
  text-align: center;
  border-width: 1;
  border-color: #000000;
  background-color: #fdeaec;
}
</style>
