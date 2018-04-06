import { shallow } from '@vue/test-utils';
import AnimatedNumber from '@/AnimatedNumber.vue';

describe('AnimatedNumber.vue', () => {
  let durationOfAnimation;

  beforeEach(() => {
    durationOfAnimation = 1000;
  });

  it('renders props.value when passed', (done) => {
    const value = 10;
    const wrapper = shallow(AnimatedNumber, {
      propsData: { value },
    });
    setTimeout(() => {
      expect(wrapper.text()).toBe(value.toString());
      done();
    }, durationOfAnimation + 100);
  });

  it('renders a float value when passed', (done) => {
    const value = 10.5;
    const wrapper = shallow(AnimatedNumber, {
      propsData: { value },
    });
    setTimeout(() => {
      expect(wrapper.text()).toBe(value.toString());
      done();
    }, durationOfAnimation + 100);
  });

  it('renders the correct value when the duration is equal 100', (done) => {
    durationOfAnimation = 100;
    const value = 10;

    const wrapper = shallow(AnimatedNumber, {
      propsData: { value, duration: durationOfAnimation },
    });

    setTimeout(() => {
      expect(wrapper.text()).toBe(value.toString());
      done();
    }, durationOfAnimation + 100);
  });

  it('renders $ 10.00  when a format function is passsed', (done) => {
    const value = 10;

    const formatValue = value_ => `$ ${Number(value_).toFixed(2)}`;

    const wrapper = shallow(AnimatedNumber, {
      propsData: { value, formatValue },
    });

    setTimeout(() => {
      expect(wrapper.text()).toBe(`$ ${value}.00`);
      done();
    }, durationOfAnimation + 100);
  });
});
