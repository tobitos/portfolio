/* eslint-disable max-len */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Twitter extends React.PureComponent {
  static defaultProps = {
    size: 24,
  };

  props: {
    size: number,
    className: string,
    id: string
  };

  render() {
    return (
      <svg
        id={this.props.id}
        className={this.props.className}
        height={this.props.size}
        width={this.props.size}
        viewBox="0 0 24 24"
      >
        <g stroke="none" strokeWidth={1} fillRule="evenodd">
          <g transform="translate(-2714.000000, -199.000000)">
            <g transform="translate(2615.000000, 111.000000)" />
            <path d="M2723.03172,218.00304 C2721.17793,218.00304 2719.45269,217.461373 2718,216.528082 C2718.25655,216.558957 2718.51807,216.574123 2718.7829,216.574123 C2720.32055,216.574123 2721.73628,216.04979 2722.85959,215.169582 C2721.4229,215.14304 2720.21076,214.19404 2719.7931,212.889707 C2719.99338,212.928165 2720.19917,212.948748 2720.41103,212.948748 C2720.71007,212.948748 2721.00028,212.908665 2721.27559,212.833373 C2719.77379,212.531665 2718.64276,211.208373 2718.64276,209.615873 L2718.64276,209.574707 C2719.08524,209.820623 2719.59172,209.967957 2720.12966,209.98529 C2719.2491,209.396498 2718.66924,208.392248 2718.66924,207.25529 C2718.66924,206.65404 2718.8309,206.090165 2719.11393,205.605373 C2720.73269,207.591123 2723.15145,208.897623 2725.87972,209.034665 C2725.82345,208.794707 2725.79476,208.543915 2725.79476,208.286623 C2725.79476,206.474207 2727.26455,205.004123 2729.07752,205.004123 C2730.02152,205.004123 2730.87503,205.40279 2731.47366,206.040873 C2732.22069,205.89354 2732.92359,205.62054 2733.55807,205.244623 C2733.31255,206.011082 2732.79172,206.65404 2732.11476,207.06029 C2732.77848,206.980123 2733.41186,206.804082 2734,206.542998 C2733.55972,207.201123 2733.00303,207.779082 2732.36193,208.242207 C2732.36855,208.38304 2732.37186,208.524415 2732.37186,208.666873 C2732.37186,213.005623 2729.06979,218.004123 2723.03172,218.004123" />
          </g>
        </g>
      </svg>
    );
  }
}
