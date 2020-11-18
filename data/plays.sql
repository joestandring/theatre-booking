-- Create and polulate the plays database

CREATE TABLE IF NOT EXISTS plays(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  actors TEXT,
  thumb TEXT,
  rearTickets INTEGER,
  circleTickets INTEGER,
  frontTickets INTEGER,
  ticketPrice INTEGER,
  first DATE,
  last DATE
);

INSERT INTO plays(name, description, actors, thumb, rearTickets, circleTickets, frontTickets, ticketPrice, first, last)
  VALUES(
    'Hamlet', 
    'Sent by the ghost of his father to avenge his brutal death, Hamlet’s mission to expose the truth is a perilous journey of madness, murder and lost love. What will ultimately become of a young man sent to kill?',
    'John Smith as Hamlet, Jane Doe as Ophelia, Stephen Baker as Horatio',
    'hamlet.jpg',
    16,
    8,
    5,
    20,
    '2021-01-08',
    '2021-01-12'
  );

  
INSERT INTO plays(name, description, actors, thumb, rearTickets, circleTickets, frontTickets, ticketPrice, first, last)
  VALUES(
    'Accidental Death of an Anarchist', 
    'Dario Fo’s classic farce sees a character known only as The Maniac hoodwink senior police in a series of increasingly bizarre impersonations. Absurdity escalates as the fast-talking con man uncovers the true story of a political suspect, who fell to his death on the street below.',
    'Martin Walker as Inspector Bertozzo, John Gonzalez and The Maniac, Debora Rochfort as Maria Feletti',
    'anarchist.jpg',
    14,
    7,
    6,
    15,
    '2021-01-15',
    '2021-01-19'
  );
  
INSERT INTO plays(name, description, actors, thumb, rearTickets, circleTickets, frontTickets, ticketPrice, first, last)
  VALUES(
    'Death of a Salesman', 
    'After many years on the road as a traveling salesman, Willy Loman realizes he has been a failure as a father and a husband. His sons, Happy and Biff, are not successful—on his terms (being “well liked”) or any others. His career fading, Willy escapes into dreamy reminiscences of an idealized past.',
    'Wendell Pierce as Willy Loman, Shardon D. Clarke as Linda Loman, Sope Dirisu as Biff Loman',
    'salesman.jpg',
    8,
    8,
    3,
    25,
    '2021-01-22',
    '2021-01-26'
  );