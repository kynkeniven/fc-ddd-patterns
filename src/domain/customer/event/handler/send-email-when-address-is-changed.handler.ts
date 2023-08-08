import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import AddressChangedEvent from "../address-changed.event";
import CustomerCreatedEvent from "../customer-created.event";


export default class SendEmailWhenAddressIsChangedHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: AddressChangedEvent): void {
    console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.Address}`); 
  }
}
