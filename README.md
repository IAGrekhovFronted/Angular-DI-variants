Encapsulation of logic that requires dependency injection in Angular is often implemented through services.  
However, creating a separate service for a single HTTP request or a single DOM event observer is not always justified.

This project demonstrates alternative approaches to encapsulating logic in Angular.

## 🎯 What This Project Demonstrates

- creating a custom InjectionToken with logic encapsulated in a factory
- creating a service that extends Observable
- using streams in components via AsyncPipe, reducing boilerplate code
