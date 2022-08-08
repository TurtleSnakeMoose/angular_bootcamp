import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentPage = 0
  images = [
    {
      title: 'Roadside',
      url: 'https://images.unsplash.com/photo-1604395924490-a3a18bb7193e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Mountain',
      url: 'https://images.unsplash.com/photo-1474692079541-e4e817f0f773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Forest',
      url: 'https://images.unsplash.com/photo-1653293558800-173e50a81b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Barn',
      url: 'https://images.unsplash.com/photo-1652271914531-9742b251b8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Dust',
      url: 'https://images.unsplash.com/photo-1612599538287-1b31769ce6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Oceanside',
      url: 'https://images.unsplash.com/photo-1577047040140-4c1324b60e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Roadside',
      url: 'https://images.unsplash.com/photo-1604395924490-a3a18bb7193e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Mountain',
      url: 'https://images.unsplash.com/photo-1474692079541-e4e817f0f773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Forest',
      url: 'https://images.unsplash.com/photo-1653293558800-173e50a81b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Barn',
      url: 'https://images.unsplash.com/photo-1652271914531-9742b251b8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Dust',
      url: 'https://images.unsplash.com/photo-1612599538287-1b31769ce6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Oceanside',
      url: 'https://images.unsplash.com/photo-1577047040140-4c1324b60e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Roadside',
      url: 'https://images.unsplash.com/photo-1604395924490-a3a18bb7193e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Mountain',
      url: 'https://images.unsplash.com/photo-1474692079541-e4e817f0f773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Forest',
      url: 'https://images.unsplash.com/photo-1653293558800-173e50a81b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Barn',
      url: 'https://images.unsplash.com/photo-1652271914531-9742b251b8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Dust',
      url: 'https://images.unsplash.com/photo-1612599538287-1b31769ce6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Oceanside',
      url: 'https://images.unsplash.com/photo-1577047040140-4c1324b60e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Roadside',
      url: 'https://images.unsplash.com/photo-1604395924490-a3a18bb7193e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Mountain',
      url: 'https://images.unsplash.com/photo-1474692079541-e4e817f0f773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Forest',
      url: 'https://images.unsplash.com/photo-1653293558800-173e50a81b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Barn',
      url: 'https://images.unsplash.com/photo-1652271914531-9742b251b8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Dust',
      url: 'https://images.unsplash.com/photo-1612599538287-1b31769ce6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Oceanside',
      url: 'https://images.unsplash.com/photo-1577047040140-4c1324b60e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Roadside',
      url: 'https://images.unsplash.com/photo-1604395924490-a3a18bb7193e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Mountain',
      url: 'https://images.unsplash.com/photo-1474692079541-e4e817f0f773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Forest',
      url: 'https://images.unsplash.com/photo-1653293558800-173e50a81b97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Barn',
      url: 'https://images.unsplash.com/photo-1652271914531-9742b251b8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGR1c3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Dust',
      url: 'https://images.unsplash.com/photo-1612599538287-1b31769ce6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Oceanside',
      url: 'https://images.unsplash.com/photo-1577047040140-4c1324b60e08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ]

  paginationInBound(index: number) {
    return Math.abs(this.currentPage - index) < 5
  }
}
