BlazeComponent.extendComponent({

    onCreated() {
        super.onCreated();
        const meteorEmoji = require('meteor-emoji');
        this.emoji= new meteorEmoji();
    },

    template() {
        return 'emojiTextArea';
    },

    value() {
        const doc = Values.findOne(this.data().id);
        if (doc) return doc.value;
    },

    events() {
        return [{
            'change input': this.onChange,
            'click input': this.onClick,
        }];
    },

    onChange(event) {
        Values.upsert(this.data().id, {
            $set: {
                value: event.target.value,
            },
        });
    },

    onClick(event) {
        $(event.target).select();
    }
  }).register('EmojiTextArea');
