_Component({
                selector: 'live-notifications',
                c: 'LiveNotifications', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    
                    this.isReadyToGo();
                }
        });