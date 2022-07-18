import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Logo from './components/Logo';
import Web from './main/Web';
import Rodape from './components/Rodape';
import Menu from './components/Menu';

ReactDOM.render(
  <div className="web">
    <Logo />
    <Menu />
    <Web />

    <div className="tituloPadrao">
      <h1 className='left'>Historia da Formula 1</h1>
      <p>Oficialmente, a Fórmula 1 foi criada em 1950 pela Federação Internacional de Automobilismo (FIA). No entanto, a história da categoria remonta ao final do século XIX, quando as primeiras corridas de carros foram disputadas na Europa. Como na época não existiam circuitos, as corridas aconteciam em estradas. Alguns historiadores apontam que uma corrida entre Paris e Bordeaux, na França, em 1895, tenha sido o marco inicial da F1. Essa corrida durou 48 horas e teve um percurso de 1200 quilômetros.Há quem considere o ano de 1901 como o início da Fórmula 1, pois nesse ano foi disputada a primeira corrida com o nome de Grande Prêmio (GP). Na ocasião, a cidade de Le Mans sediou o Grande Prêmio da França. Atualmente, Le Mans não recebe a Fórmula 1, mas é considerada um dos mais importantes circuitos do mundo. Entre 1901 e 1949, vários GPs foram disputados ao redor da Europa, em países como França, Itália, Bélgica, Inglaterra, Alemanha, Mônaco e Espanha. Os GPs só não aconteceram durante a Primeira Guerra Mundial e a Segunda. No decorrer das guerras, os pilotos participaram de corridas nos Estados Unidos, como em Indianápolis, outro grande circuito do automobilismo. Depois da Segunda Guerra Mundial, a FIA decidiu elaborar um campeonato reunindo os principais Grandes Prêmios da Europa e deu a ele o nome de Fórmula 1. A nova competição reuniria as maiores fabricantes de carros do continente, como Alfa Romeo, Ferrari, Maserati e Mercedes.</p>
    </div>

    <div className="tituloPadrao">
      <h1 className='right'>Equipes ingressadas</h1>
        <p>Atualmente em 2022</p>
        <div className="equipes">
          <div>Mercedes</div>
          <div>Red Bull</div>
          <div>Ferrari</div>
          <div>McLaren</div>
          <div>Alpine</div>
          <div>AlphaTauri</div>
          <div>Astron Martin</div>
          <div>Williams</div>
          <div>Alfa Romeo</div>
          <div>Haas</div>
        </div>
        <p>Anteriormente</p>
        <div className="equipes">
          <div>Renault</div>
          <div>Sauber</div>
          <div>Toro Rosso</div>
          <div>Sahara Force India</div>
          <div>Racing Point</div>
          <div>Lotus</div>
          <div>Simtek</div>
          <div>Forti</div>
          <div>Ligier</div>
          <div>Caterham</div>
          <div>Toleman</div>
          <div>Hispania</div>
          <div>Manor</div>
          <div>MarterCard</div>
          <div>Penske</div>
          <div>Venturi</div>
          <div>BMW</div>
        </div>
    </div>

    <div className="tituloPadrao">
      <h1>Todos os campeões mundiais</h1>
      <div>
        <table>
          <tr className="tituloTable">
            <td>Ano</td>
            <td>Campeão</td>
            <td>País</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>Max Verstappen</td>
            <td>HOL</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>Lewis Hamilton</td>
            <td>ING</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>Lewis Hamilton</td>
            <td>ING</td>
          </tr>
          <tr>
            <td>2018</td>
            <td>Lewis Hamilton</td>
            <td>ING</td>
          </tr>
          <tr>
            <td>2017</td>
            <td>Lewis Hamilton</td>
            <td>ING</td>
          </tr>
          <tr>
            <td>2016</td>
            <td>Nico Rosberg</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>2015</td>
            <td>Lewis Hamilton</td>
            <td>ING</td>
          </tr>
          <tr>
            <td>2014</td>
            <td>Lewis Hamilton</td>
            <td>ING</td>
          </tr>
          <tr>
            <td>2013</td>
            <td>Sebastian Vettel</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>2012</td>
            <td>Sebastian Vettel</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>2011</td>
            <td>Sebastian Vettel</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>2010</td>
            <td>Sebastian Vettel</td>
            <td>ALE</td>
          </tr>
        </table>

        <table>
          <tr className="tituloTable">
            <td>Ano</td>
            <td>Campeão</td>
            <td>País</td>
          </tr>
          <tr>
            <td>2009</td>
            <td>Jenson Button</td>
            <td>ING</td>
          </tr>
          <tr>
            <td>2008</td>
            <td>Lewis Hamilton</td>
            <td>ING</td>
          </tr>
          <tr>
            <td>2007</td>
            <td>Kimi Raikkonen</td>
            <td>FIN</td>
          </tr>
          <tr>
            <td>2006</td>
            <td>Fernando Alonso</td>
            <td>ESP</td>
          </tr>
          <tr>
            <td>2005</td>
            <td>Fernando Alonso</td>
            <td>ESP</td>
          </tr>
          <tr>
            <td>2004</td>
            <td>Michael Schumacher</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>2003</td>
            <td>Michael Schumacher</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>2002</td>
            <td>Michael Schumacher</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>2001</td>
            <td>Michael Schumacher</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>2000</td>
            <td>Michael Schumacher</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>1999</td>
            <td>Mika Häkkinen</td>
            <td>FIN</td>
          </tr>
          <tr>
            <td>1998</td>
            <td>Mika Häkkinen</td>
            <td>FIN</td>
          </tr>
        </table>

        <table>
          <tr className="tituloTable">
            <td>Ano</td>
            <td>Campeão</td>
            <td>País</td>
          </tr>
          <tr>
            <td>1997</td>
            <td>Jacques Villeneuve</td>
            <td>CAN</td>
          </tr>
          <tr>
            <td>1996</td>
            <td>Damon Hill</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1995</td>
            <td>Michael Schumacher</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>1994</td>
            <td>Michael Schumacher</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>1993</td>
            <td>Alain Prost</td>
            <td>FRA</td>
          </tr>
          <tr>
            <td>1992</td>
            <td>Nigel Mansell</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1991</td>
            <td>Ayrton Senna</td>
            <td>BRA</td>
          </tr>
          <tr>
            <td>1990</td>
            <td>Ayrton Senna</td>
            <td>BRA</td>
          </tr>
          <tr>
            <td>1989</td>
            <td>Alain Prost</td>
            <td>FRA</td>
          </tr>
          <tr>
            <td>1988</td>
            <td>Ayrton Senna</td>
            <td>BRA</td>
          </tr>
          <tr>
            <td>1987</td>
            <td>Nelson Piquet</td>
            <td>BRA</td>
          </tr>
          <tr>
            <td>1986</td>
            <td>Alain Prost</td>
            <td>FRA</td>
          </tr>
        </table>

        <table>
          <tr className="tituloTable">
            <td>Ano</td>
            <td>Campeão</td>
            <td>País</td>
          </tr>
          <tr>
            <td>1985</td>
            <td>Alain Prost</td>
            <td>FRA</td>
          </tr>
          <tr>
            <td>1984</td>
            <td>Niki Lauda</td>
            <td>AUT</td>
          </tr>
          <tr>
            <td>1983</td>
            <td>Nelson Piquet</td>
            <td>BRA</td>
          </tr>
          <tr>
            <td>1982</td>
            <td>Keke Rosberg</td>
            <td>FIN</td>
          </tr>
          <tr>
            <td>1981</td>
            <td>Nelson Piquet</td>
            <td>BRA</td>
          </tr>
          <tr>
            <td>1980</td>
            <td>Alan Jones</td>
            <td>AUS</td>
          </tr>
          <tr>
            <td>1979</td>
            <td>Jody Scheckter</td>
            <td>AFS</td>
          </tr>
          <tr>
            <td>1978</td>
            <td>Mario Andretti</td>
            <td>EUA</td>
          </tr>
          <tr>
            <td>1977</td>
            <td>Niki Lauda</td>
            <td>AUT</td>
          </tr>
          <tr>
            <td>1976</td>
            <td>James Hunt</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1975</td>
            <td>Niki Lauda</td>
            <td>AUT</td>
          </tr>
          <tr>
            <td>1974</td>
            <td>Emerson Fittipaldi</td>
            <td>BRA</td>
          </tr>
        </table>

        <table>
          <tr className="tituloTable">
            <td>Ano</td>
            <td>Campeão</td>
            <td>País</td>
          </tr>
          <tr>
            <td>1973</td>
            <td>Jackie Stewart</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1972</td>
            <td>Emerson Fittipaldi</td>
            <td>BRA</td>
          </tr>
          <tr>
            <td>1971</td>
            <td>Jackie Stewart</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1970</td>
            <td>Jochen Rindt</td>
            <td>ALE</td>
          </tr>
          <tr>
            <td>1969</td>
            <td>Jackie Stewart</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1968</td>
            <td>Graham Hill</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1967</td>
            <td>Denny Hulme</td>
            <td>NZ</td>
          </tr>
          <tr>
            <td>1966</td>
            <td>Jack Brabham</td>
            <td>AUS</td>
          </tr>
          <tr>
            <td>1965</td>
            <td>Jimmy Clark</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1964</td>
            <td>John Surtees</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1963</td>
            <td>Jimmy Clark</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1962</td>
            <td>Graham Hill</td>
            <td>GB</td>
          </tr>
        </table>

        <table>
          <tr className="tituloTable">
            <td>Ano</td>
            <td>Campeão</td>
            <td>País</td>
          </tr>
          <tr>
            <td>1961</td>
            <td>Phil Hill</td>
            <td>EUA</td>
          </tr>
          <tr>
            <td>1960</td>
            <td>Jack Brabham</td>
            <td>AUS</td>
          </tr>
          <tr>
            <td>1959</td>
            <td>Jack Brabham</td>
            <td>AUS</td>
          </tr>
          <tr>
            <td>1958</td>
            <td>Mike Hawthorn</td>
            <td>GB</td>
          </tr>
          <tr>
            <td>1957</td>
            <td>Juan Manuel Fangio</td>
            <td>ARG</td>
          </tr>
          <tr>
            <td>1956</td>
            <td>Juan Manuel Fangio</td>
            <td>ARG</td>
          </tr>
          <tr>
            <td>1955</td>
            <td>Juan Manuel Fangio</td>
            <td>ARG</td>
          </tr>
          <tr>
            <td>1954</td>
            <td>Juan Manuel Fangio</td>
            <td>ARG</td>
          </tr>
          <tr>
            <td>1953</td>
            <td>Alberto Ascari</td>
            <td>ITA</td>
          </tr>
          <tr>
            <td>1952</td>
            <td>Alberto Ascari</td>
            <td>ITA</td>
          </tr>
          <tr>
            <td>1951</td>
            <td>Juan Manuel Fangio</td>
            <td>ARG</td>
          </tr>
          <tr>
            <td>1950</td>
            <td>Giuseppe Farina</td>
            <td>ITA</td>
          </tr>
        </table>
      </div>
    </div>

    <div className="tituloPadrao">
      <h1 className="center">Carros da F1</h1>
      <div className="cars">
        <div className="car1"></div>
        <div className="car2"></div>
        <div className="car3"></div>
        <div className="car4"></div>
        <div className="car5"></div>
      </div>
    </div>

    <div className="tituloPadrao">
      <h1 className="center">Pistas oficiais da F1 2022</h1>
      <div className="circuit"></div>
    </div>

    
    <div className="tituloPadrao">
      <h1>Queremos saber a sua opnião!</h1>
      <p>Para qual piloto e/ou equipe você torce/gosta?</p>
      <form>
        <label>
          <input type="text" name="name" placeholder="Seu nome"/>
        </label>
        <label>
          <input type="text" name="name" placeholder="Nome do piloto"/>
        </label>
        <label>
          <input type="text" name="name" placeholder="Nome da equipe"/>
        </label>
          <input type="reset" value="Limpar" className="btn"/>
          <input type="submit" value="Enviar" className="btn"/>
      </form>
    </div>

    <div className="tituloPadrao">
      <h1>Opniões dos usuários</h1>
      <div>
      </div>
    </div>

  <Rodape />
  </div>
, document.getElementById('root'));