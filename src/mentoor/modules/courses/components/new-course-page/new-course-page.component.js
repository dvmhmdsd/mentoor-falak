class NewCoursePage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, coursesService) {
        this.router = router;
        this.coursesService = coursesService;
        this.name = 'new-course';
        this.title = 'Add new course';
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isValidForm = true;
        this.data = {
            sections: [
                'Introduction'
            ],
        };

        this.phase = 1;

        this.errors = {};
    }

    async submit(form) {
        // this.isLoading = true;
        let {record: course} = await this.coursesService.create(form);

        this.router.navigateTo(URLS.course(course, 'sections'));
    }

    next() {
        this.formHandler.validate();

        if (! this.formHandler.hasErrors()) {
            this.phase++;
        }
    }

    back() {
        this.formHandler.validate();

        if (! this.formHandler.hasErrors()) {
            this.phase--;
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
    }
}