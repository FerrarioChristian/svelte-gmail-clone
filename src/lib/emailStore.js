import { writable } from 'svelte/store';

export const emailStore = writable([
	{
		mittente: 'alice@example.com',
		oggetto: 'Meeting di lavoro',
		corpo:
			'Ciao tutti, vorrei organizzare un meeting di lavoro per discutere i prossimi passi del progetto. Fate sapere quando siete disponibili. Grazie!',
		speciale: false,
		importante: false
	},
	{
		mittente: 'bob@example.com',
		oggetto: 'Domanda sul documento',
		corpo:
			'Ciao Alice, ho una domanda riguardo al documento che hai condiviso. Possiamo discuterne nel prossimo meeting?',
		speciale: false,
		importante: false
	},
	{
		mittente: 'charlie@example.com',
		oggetto: 'Richiesta di feedback',
		corpo:
			'Ciao tutti, ho bisogno dei vostri feedback sul mio ultimo progetto. Per favore, controllate e fatemi sapere cosa ne pensate. Grazie mille!',
		speciale: false,
		importante: false
	},
	{
		mittente: 'dave@example.com',
		oggetto: 'Report mensile',
		corpo:
			'Salve, vi invio il report mensile con i dati aggiornati. Per favore, fate riferimento a questo documento per i dettagli.',
		speciale: false,
		importante: false
	},
	{
		mittente: 'eve@example.com',
		oggetto: 'Questionario sulla soddisfazione',
		corpo:
			'Gentili utenti, vorremmo chiedervi di compilare un breve questionario sulla vostra soddisfazione con i nostri servizi. Grazie per il vostro tempo.',
		speciale: false,
		importante: false
	},
	{
		mittente: 'frank@example.com',
		oggetto: 'Proposta di collaborazione',
		corpo:
			'Buongiorno, vorrei discutere la possibilità di una collaborazione tra le nostre aziende. Sarebbe possibile organizzare un incontro?',
		speciale: false,
		importante: false
	},
	{
		mittente: 'grace@example.com',
		oggetto: 'Risposta alla tua domanda',
		corpo:
			'Ciao Bob, ecco la risposta alla tua domanda: ... Se hai ulteriori domande, non esitare a chiedere.',
		speciale: false,
		importante: false
	},
	{
		mittente: 'hannah@example.com',
		oggetto: 'Conferma prenotazione',
		corpo:
			'Gentile cliente, confermiamo la tua prenotazione per il prossimo weekend. Per favore, controlla i dettagli allegati.',
		speciale: false,
		importante: false
	},
	{
		mittente: 'ian@example.com',
		oggetto: 'Invito al webinar',
		corpo:
			'Salve, ti inviamo un invito al nostro prossimo webinar sulle ultime tendenze del settore. Speriamo di vederti lì!',
		speciale: false,
		importante: false
	},
	{
		mittente: 'jane@example.com',
		oggetto: 'Aggiornamento sul progetto',
		corpo:
			'Ciao tutti, ecco un rapido aggiornamento sullo stato del progetto. Siamo in ritardo rispetto alla tabella di marcia, ma stiamo lavorando per recuperare il tempo perso.',
		speciale: false,
		importante: false
	},
	{
		mittente: 'kevin@example.com',
		oggetto: 'Domanda urgente',
		corpo:
			'Ciao, ho una domanda urgente riguardo al progetto in corso. Potresti darmi una mano al più presto?',
		speciale: false,
		importante: false
	},
	{
		mittente: 'laura@example.com',
		oggetto: 'Auguri di compleanno',
		corpo: 'Buon compleanno! Ti auguro una giornata speciale piena di gioia e felicità.',
		speciale: false,
		importante: false
	},
	{
		mittente: 'mike@example.com',
		oggetto: 'Richiesta di supporto tecnico',
		corpo:
			'Salve, sto riscontrando problemi con il software. Potreste fornirmi assistenza tecnica al più presto? Grazie.',
		speciale: false,
		importante: false
	},
	{
		mittente: 'natalie@example.com',
		oggetto: 'Conferma ordine',
		corpo:
			"Grazie per il tuo ordine! Ti confermiamo che è stato ricevuto e sarà elaborato al più presto. Riceverai un aggiornamento una volta che l'ordine sarà spedito.",
		speciale: false,
		importante: false
	},
	{
		mittente: 'oliver@example.com',
		oggetto: 'Presentazione di vendita',
		corpo:
			'Ciao, ti invio la presentazione di vendita per il prodotto X. Se hai domande o hai bisogno di ulteriori informazioni, non esitare a contattarmi.',
		speciale: false,
		importante: false
	}
]);
