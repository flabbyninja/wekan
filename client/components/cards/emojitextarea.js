import MeteorEmoji from 'meteor-emoji';


class EmojiTextArea extends BlazeComponent {
  
  onCreated() {
      super.onCreated();
      const emojiPicker = new MeteorEmoji();
    }

  template() {
      return 'emojiTextArea';
    }

  value() {
      const doc = Values.findOne(this.data().id);
      if (doc) return doc.value;
    }

  events() {
      return [{
          'change input': this.onChange,
          'click input': this.onClick,
        }];
    }

  onChange(event) {
      Values.upsert(this.data().id, {
          $set: {
              value: event.target.value,
            },
        });
    }

  onClick(event) {
      $(event.target).select();
    }
  }

EmojiTextArea.register('EmojiTextArea');
