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

  it('respect the time of the delay', (done) => {
    const delay = 50;
    durationOfAnimation = 10;
    wrapper = shallow(AnimatedNumber, {
      propsData: {
        value,
        delay,
        durationOfAnimation,
      },
    });

    setTimeout(() => {
      expect(wrapper.text()).toBe('0');
    }, delay);

    setTimeout(() => {
      expect(wrapper.text()).toBe(value.toString());
      done();
    }, 2000);
  });


  it('should return a Number when formatValue function is passed', () => {
    const formatValue = value_ => value_;
    wrapper.setProps({ formatValue });
    const formatedValue = wrapper.vm.formatValue(value);
    expect(formatedValue).toBe(value);
    expect(typeof formatedValue).toBe('number');
  });

  it('renders $ 10.00  when a format function is passsed', (done) => {
    const formatValue = value_ => `$ ${value_.toFixed(2)}`;
    wrapper.setProps({ formatValue });
    setTimeout(() => {
      expect(wrapper.text()).toBe(`$ ${value}.00`);
      done();
    }, durationOfAnimation + 100);
  });

  it('should call the animateValue when props.value change ', () => {
    const spy = jest.spyOn(wrapper.vm, 'animateValue');
    wrapper.setProps({ value: 1000 });
    expect(spy).toHaveBeenCalled();
  });

  it('should call the props.begin before animation start', (done) => {
    let isNotStarted = false;
    wrapper = shallow(AnimatedNumber, {
      propsData: {
        value,
        begin: (anim) => {
          isNotStarted = anim.progress === 0;
        },
      },
    });
    const spy = jest.spyOn(wrapper.vm, 'begin');
    wrapper.setProps({ value: 1000 });
    setTimeout(() => {
      expect(isNotStarted).toBe(true);
      expect(spy).toHaveBeenCalled();
      done();
    }, durationOfAnimation);
  });

  it('should call the props.complete when the animation is completed', (done) => {
    let isAnimationCompleted = false;
    wrapper = shallow(AnimatedNumber, {
      propsData: {
        value,
        complete: (anim) => {
          isAnimationCompleted = anim.progress === 100;
        },
      },
    });

    const spy = jest.spyOn(wrapper.vm, 'complete');
    wrapper.setProps({ value: 3000 });

    setTimeout(() => {
      expect(isAnimationCompleted).toBe(true);
      expect(spy).toHaveBeenCalled();
      done();
    }, durationOfAnimation + 100);
  });

  it('should call the props.update multiple times when the animation is playing', (done) => {
    let counter = 0;
    wrapper = shallow(AnimatedNumber, {
      propsData: {
        value,
        update: () => {
          counter += 1;
        },
      },
    });

    setTimeout(() => {
      expect(counter).toBeGreaterThan(30);
      done();
    }, durationOfAnimation + 100);
  });

  it('should call the props.run multiple times when the animation is playing after delay is finished', (done) => {
    let counter = 0;
    wrapper = shallow(AnimatedNumber, {
      propsData: {
        value,
        delay: 50,
        run: () => {
          counter += 1;
        },
      },
    });

    setTimeout(() => {
      expect(counter).toBeGreaterThan(30);
      done();
    }, durationOfAnimation + 100);

    setTimeout(() => {
      expect(counter).toBe(0);
      done();
    }, 55);
  });
});
