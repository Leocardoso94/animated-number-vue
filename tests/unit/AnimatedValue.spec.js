import { shallow } from '@vue/test-utils';
import AnimatedNumber from '@/AnimatedNumber.vue';

describe('AnimatedNumber.vue', () => {
  let durationOfAnimation;
  let wrapper;
  let value;

  beforeEach(() => {
    durationOfAnimation = 1000;
    value = 10;
    wrapper = shallow(AnimatedNumber, {
      propsData: { value },
    });
  });

  it('renders props.value when passed', (done) => {
    setTimeout(() => {
      expect(wrapper.text()).toBe(value.toString());
      done();
    }, durationOfAnimation + 100);
  });

  it('renders a float value when passed', (done) => {
    setTimeout(() => {
      expect(wrapper.text()).toBe(value.toString());
      done();
    }, durationOfAnimation + 100);
  });

  it('renders the correct value when the duration is equal 100', (done) => {
    wrapper.setProps({ duration: durationOfAnimation });
    setTimeout(() => {
      expect(wrapper.text()).toBe(value.toString());
      done();
    }, durationOfAnimation + 100);
  });

  it('renders $ 10.00  when a format function is passsed', (done) => {
    const formatValue = value_ => `$ ${Number(value_).toFixed(2)}`;
    wrapper.setProps({ formatValue });
    setTimeout(() => {
      expect(wrapper.text()).toBe(`$ ${value}.00`);
      done();
    }, durationOfAnimation + 100);
  });

  it('should call the animateValue when value props change ', () => {
    const spy = jest.spyOn(wrapper.vm, 'animateValue');
    wrapper.setProps({ value: 1000 });
    expect(spy).toHaveBeenCalled();
  });
});
