import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Calculator from '../Calculator.vue';

describe('Calculator', () => {
    it('renders the calculator component', () => {
      const wrapper = mount(Calculator);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('initializes with correct data properties', () => {
      const wrapper = mount(Calculator);
      expect(wrapper.vm.previous).toBe(null);
      expect(wrapper.vm.current).toBe('');
      expect(wrapper.vm.operator).toBe(null);
      expect(wrapper.vm.operatorClicked).toBe(null);
    });
  
    it('clears the current value when clear button is clicked', () => {
      const wrapper = mount(Calculator);
      wrapper.setData({ current: '123' });
      const clearButton = wrapper.find('.btn.top-operator');
      clearButton.trigger('click');
      expect(wrapper.vm.current).toBe('0');
    });

    it('appends the correct number when a number button is clicked', () => {
        const wrapper = mount(Calculator);
        const numberButton = wrapper.find('.seven');
        numberButton.trigger('click');
        expect(wrapper.vm.current).toBe('7');
      });
    
    
      it('appends a decimal point when the dot button is clicked', () => {
        const wrapper = mount(Calculator);
        wrapper.setData({ current: '2' });
        const dotButton = wrapper.find('.dot');
        dotButton.trigger('click');
        expect(wrapper.vm.current).toBe('2.');
      });
    
      it('updates the previous and operatorClicked properties when an operator button is clicked', () => {
        const wrapper = mount(Calculator);
        wrapper.setData({ current: '5' });
        const operatorButton = wrapper.find('.plus');
        operatorButton.trigger('click');
        expect(wrapper.vm.previous).toBe('5');
        expect(wrapper.vm.operatorClicked).toBe(true);
      });
    
      it('performs addition correctly when the equal button is clicked', () => {
        const wrapper = mount(Calculator);
        wrapper.setData({ previous: '2', operator: (a, b) => a + b, current: '3' });
        const equalButton = wrapper.find('.equal');
        equalButton.trigger('click');
        expect(wrapper.vm.current).toBe('5');
      });
  });  