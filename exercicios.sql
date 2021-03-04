- Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO'.
select nome from aluno_turma a join turma t on a.aluno_id = t.aluno_id where t.professor = 'JOAO PEDRO' 

- Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA'.
select dia_da_semana from turma t join disciplina d on d.id = t.disciplina_id where d.nome = 'MATEMATICA'

- Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA'.
SELECT * FROM ALUNOS WHERE DISCIPLINA LIKE = 'MATEMATICA' AND DISCIPLINA LIKE = "FISICA"

- Buscar as disciplinas que não tenham nenhuma turma.
select disciplina from turma with count < 0

- Buscar os alunos que frequentem aulas de 'MATEMATICA' exceto os que frequentem 'QUIMICA'.
SELECT ALUNOS FROM DISCIPLINA LIKE = "MATEMATICA" EXCEPT DISCIPLINA LIKE = "QUIMICA"
