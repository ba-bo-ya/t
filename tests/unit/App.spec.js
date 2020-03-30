import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Wrap component', () => {
  test('correct component data', () => {
    const app = shallowMount(App)
    expect(app.vm.message).toBe('Hello App')
  })
})
