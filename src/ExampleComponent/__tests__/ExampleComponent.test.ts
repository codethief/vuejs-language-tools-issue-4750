import ExampleComponent from '../ExampleComponent.vue'; // <---- Vue.Volar complains about `ExampleComponent.vue is not listed within the file list of project […]/tsconfig.tests.json`

type ComponentProps = InstanceType<typeof ExampleComponent>['$props'];

const exampleProps: ComponentProps = {
  // @ts-expect-error
  msg: "I am not a valid message"
}
