import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    // this.followState = this.followState();
    this.toggleButton.addEventListener('click', this.handleClick.bind(this));
    
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    console.log(this.followState)
    if (this.followState === 'unfollowed') {
      // console.log(this.followState)
      this.follow();
    }
    else {this.unfollow()};

  }

  async follow() {
    // Your code here
    this.followState = 'following';
    await API.followerUser(this.toggleButton.dataset.userId)
    this.followState = 'followed';
  }
  
  async unfollow() {
    // Your code here
    this.followState = 'unfollowing';
    await API.unfollowerUser(this.toggleButton.dataset.userId)
    this.followState = 'unfollowed';
  }
  

  render() {
    switch (this.followState) {
      // Your code here
      case 'followed':
        this.toggleButton.textContent = 'Unfollow!';
        break;
      case 'unfollowed':
        this.toggleButton.textContent = 'Follow!';
        break;
      case 'following':
        this.toggleButton.textContent = 'Following...';
        break;
      case 'unfollowing':
        this.toggleButton.textContent = 'Unfollowing...';
        break;
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}