<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="ingredientes">
    <h2>Crea tu Amborgesa</h2>
    <form name="formulario" onsubmit="creacion.enviarDatos(); return false" class="login-form" >
        <input type="text" name="nombreAmborgesa" placeholder="Nombre de la Amborgesa"/>
        <p>Elige tu pan</p>
        <select name="pan">
        <xsl:for-each select="pan">
            <option>
                <xsl:attribute name="value">
                    <xsl:value-of select="."/>
                </xsl:attribute>
                <xsl:value-of select="."/>
            </option>
        </xsl:for-each>
        </select>

        <p>Elige tu tipo de carne</p>
        <select name="carne">
            <xsl:for-each select="tipocarne">
            <option>
                <xsl:attribute name="value">
                    <xsl:value-of select="."/>
                </xsl:attribute>
                <xsl:value-of select="."/>
            </option>
        </xsl:for-each>
        </select>

        <p>¿Lechuga?</p>
        <select name="lechuga">
            <xsl:for-each select="lechuga">
                <option>
                    <xsl:attribute name="value">
                        <xsl:value-of select="."/>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </option>
        </xsl:for-each>
        </select>

        <p>¿Huevo?</p>
        <select name="huevo">
            <xsl:for-each select="huevo">
                <option>
                    <xsl:attribute name="value">
                        <xsl:value-of select="."/>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </option>
            </xsl:for-each>
        </select>

        <p>¿Tomate?</p>
        <select name="tomate">
            <xsl:for-each select="tomate">
                <option>
                    <xsl:attribute name="value">
                        <xsl:value-of select="."/>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </option>
            </xsl:for-each>
        </select>

        <p>¿Guacamole?</p>
        <select name="guacamole">
            <xsl:for-each select="guacamole">
                <option>
                    <xsl:attribute name="value">
                        <xsl:value-of select="."/>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </option>
            </xsl:for-each>
        </select>

        <p>¿Bacon?</p>
        <select name="bacon">
            <xsl:for-each select="bacon">
                <option>
                    <xsl:attribute name="value">
                        <xsl:value-of select="."/>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </option>
            </xsl:for-each>
        </select>

        <p>¿Cebolla?</p>
        <select name="cebolla">
            <xsl:for-each select="cebolla">
                <option>
                    <xsl:attribute name="value">
                        <xsl:value-of select="."/>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </option>
            </xsl:for-each>
        </select>

        <p>¿Pepinillos?</p>
        <select name="pepinillos">
            <xsl:for-each select="pepinillos">
                <option>
                    <xsl:attribute name="value">
                        <xsl:value-of select="."/>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </option>
            </xsl:for-each>
        </select>

        <p>¿Queso?</p>
        <select name="queso">
            <xsl:for-each select="queso">
                <option>
                    <xsl:attribute name="value">
                        <xsl:value-of select="."/>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </option>
            </xsl:for-each>
        </select>

        <p>¿Salsa?</p>
        <select name="salsa">
           <xsl:for-each select="salsa">
                <option>
                    <xsl:attribute name="value">
                        <xsl:value-of select="."/>
                    </xsl:attribute>
                    <xsl:value-of select="."/>
                </option>
            </xsl:for-each>
        </select>
        <p class='guardar'>Guarda los cambios</p>
        <input class='reset' type="reset" value="Cancelar"/>
        <input class="subbt" type="submit" value="Guardar"/>
        
    </form>
    </xsl:template>
</xsl:stylesheet>