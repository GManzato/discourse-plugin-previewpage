import staticView from "discourse/views/static";

export default {
  name: "extend-for-static",
  initialize() {
    staticView.reopen(Ember.TargetActionSupport,{
      _openLoginPage: function() {
        var self = this;
        Ember.run.scheduleOnce('afterRender',function(){
          Ember.$('.login-button').click();
          Ember.$('.modal-backdrop').remove();
        });

      }.on('didInsertElement'),
    });
  }
}