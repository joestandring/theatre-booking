-- Create and polulate the plays database

CREATE TABLE IF NOT EXISTS plays(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  actors TEXT,
  thumb TEXT,
  ticketsLeft INTEGER,
  ticketPrice INTEGER,
  first DATE,
  last DATE
);

INSERT INTO plays(name, description, actors, thumb, ticketsLeft, ticketPrice, first, last)
  VALUES(
    'Hamlet', 
    'Sent by the ghost of his father to avenge his brutal death, Hamlet’s mission to expose the truth is a perilous journey of madness, murder and lost love. What will ultimately become of a young man sent to kill?',
    'John Smith as Hamlet, Jane Doe as Ophelia, Stephen Baker as Horatio',
    'hamlet.jpg',
    32,
    20,
    '2021-01-08',
    '2021-01-12'
  );

  
INSERT INTO plays(name, description, actors, thumb, ticketsLeft, ticketPrice, first, last)
  VALUES(
    'Accidental Death of an Anarchist', 
    'Dario Fo’s classic farce sees a character known only as The Maniac hoodwink senior police in a series of increasingly bizarre impersonations. Absurdity escalates as the fast-talking con man uncovers the true story of a political suspect, who fell to his death on the street below.',
    'Martin Walker as Inspector Bertozzo, John Gonzalez and The Maniac, Debora Rochfort as Maria Feletti',
    'anarchist.jpg',
    27,
    15,
    '2021-01-15',
    '2021-01-19'
  );